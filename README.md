# 🌐 AWS Cloud Resume Challenge  

This project is my implementation of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/). It represents my hands-on journey of building a fully functional, cloud-based resume using AWS. The goal was to connect front-end development, serverless computing, and CI/CD automation into one complete system.

---

## 🚀 Live Website  
🔗 [View My Cloud Resume](https://dcj9qp357zcv1.cloudfront.net)

---

## 📖 My Story  

When I started this project, my goal wasn’t just to publish a website — I wanted to understand how modern cloud applications are built, deployed, and automated end-to-end.

I began with the front end, creating a responsive website using **HTML, CSS, and JavaScript**, hosted on an **Amazon S3** bucket configured for static website hosting. To improve performance and global reach, I connected it to **Amazon CloudFront**, which serves the content through AWS edge locations.

Next, I built the **serverless backend**. Using **AWS Lambda (Python)** and **DynamoDB**, I implemented a visitor counter that updates in real time whenever someone visits the site. **API Gateway** handles communication between the website and the Lambda function securely.

To keep everything consistent and repeatable, I used **Terraform** for Infrastructure as Code. Finally, I set up **GitHub Actions** to automate deployments so that whenever I push new code, the workflow syncs my updated files to S3 and invalidates the CloudFront cache automatically.

---

## ⚙️ Technologies Used  

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** AWS Lambda (Python) + API Gateway  
- **Database:** Amazon DynamoDB  
- **Infrastructure as Code:** Terraform  
- **CI/CD:** GitHub Actions  
- **AWS Services:** S3, CloudFront, IAM  

---

## 🧱 Project Structure  

```plaintext
.
├── frontend/            # Static website files (HTML, CSS, JS)
│   └── index.html
├── backend/             # Lambda function for visitor counter
│   └── visitor_counter.py
├── terraform/           # Terraform configuration files
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── .github/workflows/   # GitHub Actions workflows
│   └── frontend-cicd.yml
└── README.md
```
---

## 💡 What I Learned  

This project helped me go beyond the theory of cloud computing and apply it in practice. I learned how to:  

- Design and deploy a **serverless application** on AWS  
- Configure **IAM roles** with least-privilege access  
- Automate resource provisioning with **Terraform**  
- Build a **CI/CD pipeline** using **GitHub Actions**  
- Manage **CloudFront** cache invalidation and updates  
- Troubleshoot and monitor a **distributed cloud architecture**  
- Think like a **DevOps engineer**, focusing on reliability, scalability, and automation  

It gave me a deeper understanding of how different AWS services work together and built confidence to design larger, more intelligent systems.  

---

## 🔍 Future Improvements  

- Add **unique visitor tracking** with cookies or hashed IPs  
- Implement **AWS CloudWatch** for detailed monitoring and logging  
- Store environment variables securely using **AWS Secrets Manager**  
- Modularize **Terraform** configurations for better reusability  
- Add a **custom domain and HTTPS** for a more professional deployment  

---

## 🧭 Key Takeaway  

This challenge taught me that the best way to learn the cloud is to build in it. Every step — from architecture to automation — helped me strengthen my skills in **cloud computing**, **DevOps**, and **system design**.  

The project gave me a solid foundation to build more advanced systems that combine **AWS**, **automation**, and **AI-driven workflows** — skills I continue to grow as I work toward becoming a **Cloud and ServiceNow Engineer**.  


---

## 📜 License

This project is licensed under the MIT License.

