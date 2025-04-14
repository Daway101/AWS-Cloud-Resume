# 🌐 AWS Cloud Resume Challenge

This project is my implementation of the [Cloud Resume Challenge]([https://cloudresumechallenge.dev/](https://cloudresumechallenge.dev/docs/the-challenge/)), which demonstrates my skills in cloud computing, front-end development, and CI/CD using AWS and GitHub Actions.

## 🚀 Live Website

🔗 [View My Resume](https://dcj9qp357zcv1.cloudfront.net)  

---

## 📌 Overview

The Cloud Resume Challenge is a project designed to showcase real-world cloud and DevOps skills. This project includes:

- A resume-style front-end hosted on AWS S3 and delivered via CloudFront.
- A serverless backend using Lambda and DynamoDB to track unique visitors.
- Infrastructure managed with Terraform.
- CI/CD pipelines using GitHub Actions.

---

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: AWS Lambda (Python)
- **Database**: Amazon DynamoDB
- **Infrastructure as Code**: Terraform
- **CI/CD**: GitHub Actions
- **Other AWS Services**: S3, CloudFront, IAM

---

## 📁 Project Structure

```plaintext
.
├── frontend/                  # Static website files (HTML, CSS, JS)
│   └── index.html
├── backend/                   # Lambda function code
│   └── visitor_counter.py
├── terraform/                 # Terraform configuration files
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── .github/workflows/         # GitHub Actions CI/CD workflows
│   └── frontend-cicd.yml
├── README.md
``` 
---

## 🧪 How to Deploy This Project

Follow these steps to deploy this Cloud Resume Challenge project using Terraform and GitHub Actions:

---

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/your-username/aws-cloud-resume.git
cd aws-cloud-resume
```
---

### 🔐 2. Set Up AWS CLI and Configure Your Profile

Make sure you have the AWS CLI installed. Then, create a named profile to store your AWS credentials securely:
```bash
aws configure --profile dawa-dev
```
Provide the following when prompted:

1. AWS Access Key ID

2. AWS Secret Access Key

3. Default region (e.g. us-east-1)

4. Output format (e.g. json)

---

### ⚙️ 3. Deploy AWS Infrastructure with Terraform

Navigate to the Terraform folder and run the following:
```bash
cd terraform
terraform init
terraform apply
```

This will create:

-S3 bucket for your website

-DynamoDB table for tracking visitors

-Lambda function

-IAM roles and policies

-API Gateway

---

### 🔐 4. Add GitHub Secrets for CI/CD

Go to your GitHub repository → **Settings** → **Secrets and Variables** → **Actions**, and add the following secrets:

| Secret Name           | Description                       |
|------------------------|-----------------------------------|
| `AWS_ACCESS_KEY_ID`     | Your AWS access key               |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret key               |
| `AWS_S3_BUCKET`         | The name of your S3 bucket        |
| `AWS_REGION`            | Your AWS region (e.g., us-east-1) |


---

### 🚀 5. Deploy Frontend Automatically via GitHub Actions

Make sure your yml file exists in .github/workflows/. When you push changes to the main branch, GitHub Actions will:

1. Checkout your repo

2. Sync files from the frontend/ or SOURCE_DIR directory to your S3 bucket

3. Invalidate the CloudFront cache (if configured)

---

📊 Unique Visitor Counter

The homepage includes a dynamic visitor counter powered by:

1. AWS Lambda (Python)

2. Amazon DynamoDB

3. API Gateway (lambda)


---

### 📃 License
This project is licensed under the MIT License.




