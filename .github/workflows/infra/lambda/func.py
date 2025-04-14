import json
import boto3
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloud-resume-dynamotable')

def lambda_handler(event, context):
    headers = {
        "Access-Control-Allow-Origin": "https://dcj9qp357zcv1.cloudfront.net",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
    }

    logger.info("Full event received:")
    logger.info(json.dumps(event))

    # Support both Function URL and API Gateway event formats
    method = event.get("requestContext", {}).get("http", {}).get("method", event.get("httpMethod", "GET"))

    if method == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps({"message": "CORS preflight passed"})
        }

    try:
        # Get current count
        response = table.get_item(Key={'id': '0'})
        current_count = int(response.get('Item', {}).get('Visitors', 0))

        if method == "POST":
            current_count += 1
            table.put_item(Item={'id': '0', 'Visitors': current_count})
            logger.info(f"Updated count: {current_count}")

        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps({"count": current_count})
        }

    except Exception as e:
        logger.error(f"Error: {str(e)}")
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": str(e)})
        }
