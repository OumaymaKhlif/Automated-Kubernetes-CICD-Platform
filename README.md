# 🚀 Kubernetes DevOps Platform — Fully Automated CI/CD Infrastructure

## Project Overview

This project demonstrates the implementation of a complete **DevOps and Cloud-Native platform** using **Infrastructure as Code (IaC)** principles.

The infrastructure automates the deployment of:

* A Kubernetes cluster
* A CI/CD pipeline
* A private Docker registry
* Shared persistent storage
* A complete 3-tier application deployment

The entire environment is provisioned automatically using **Vagrant** and **Ansible**.

---

# Objectives

The main goals of this project are:

* Automate infrastructure provisioning using IaC
* Deploy a Kubernetes cluster with kubeadm
* Implement a complete CI/CD pipeline
* Build and push Docker images automatically
* Deploy applications using Kubernetes and Helm
* Configure persistent storage using NFS
* Deploy a scalable 3-tier cloud-native application

---

# Infrastructure Architecture

## Virtual Machines

| VM            | Role                         | IP Address    | Specifications   |
| ------------- | ---------------------------- | ------------- | ---------------- |
| vm-service    | Nexus + NFS + Gitea + Docker | 192.168.56.10 | 3 GB RAM / 2 CPU |
| control-plane | Kubernetes Master Node       | 192.168.56.11 | 3 GB RAM / 2 CPU |
| worker-1      | Kubernetes Worker Node       | 192.168.56.12 | 2 GB RAM / 2 CPU |
| worker-2      | Kubernetes Worker Node       | 192.168.56.13 | 2 GB RAM / 2 CPU |

---

# Technology Stack

## Infrastructure & Automation

* Vagrant
* VirtualBox
* Ansible

## Containerization & Orchestration

* Docker
* Kubernetes (kubeadm)
* Calico CNI
* Helm

## DevOps & CI/CD

* Jenkins
* Nexus Repository
* Gitea

## Storage

* NFS Server
* Persistent Volumes (PV)
* Persistent Volume Claims (PVC)

---

# Kubernetes Cluster

The Kubernetes cluster is composed of:

* 1 Control Plane
* 2 Worker Nodes

### Features

* Automated cluster initialization with kubeadm
* Calico networking for pod communication
* Persistent storage with NFS
* Jenkins deployed inside Kubernetes
* Helm-based application deployment

---

# CI/CD Pipeline Workflow

```text
Developer Pushes Code to Gitea
              ↓
Jenkins Detects Changes Automatically
              ↓
Docker Image Build
              ↓
Push Image to Nexus Private Registry
              ↓
Helm Upgrade / kubectl Apply
              ↓
Automatic Deployment on Kubernetes
```

---

# 3-Tier Application

The deployed application includes:

## Frontend

* User interface
* Exposed through Kubernetes Service

## Backend

* REST API
* Handles business logic and CRUD operations

## Database

* StatefulSet deployment
* Persistent data storage using PVC + NFS

---

# Services Running on vm-service

| Service          | Purpose                   |
| ---------------- | ------------------------- |
| Nexus Repository | Private Docker Registry   |
| Gitea            | Source Code Management    |
| Docker           | Container Build Engine    |
| NFS Server       | Shared Persistent Storage |

---

# Project Structure

```text
.
├── ansible/
├── vagrant/
├── kubernetes/
├── helm/
├── jenkins/
├── app/
│   ├── frontend/
│   ├── backend/
│   └── database/
├── manifests/
├── pipeline/
└── README.md
```

---

# Infrastructure Automation

This project follows Infrastructure as Code principles:

* VM provisioning automated with Vagrant
* Server configuration automated with Ansible
* Kubernetes deployment automated with kubeadm
* CI/CD fully automated with Jenkins
* Application deployment automated with Helm

---

# Key Features

✅ Fully automated infrastructure

✅ Kubernetes multi-node cluster

✅ Jenkins CI/CD pipeline

✅ Private Docker registry with Nexus

✅ Git self-hosting with Gitea

✅ Persistent storage using NFS

✅ Helm-based deployments

✅ Stateful application deployment

✅ Scalable cloud-native architecture

---

# Skills Demonstrated

* Kubernetes Administration
* Docker & Containerization
* Infrastructure as Code
* CI/CD Automation
* Helm Packaging
* Linux Administration
* Networking
* Persistent Storage Management
* Cloud-Native Architecture
* DevOps Best Practices

---

# Future Improvements

* Monitoring with Prometheus & Grafana
* Logging with ELK Stack
* GitOps with ArgoCD
* Ingress Controller
* HTTPS with cert-manager
* High Availability Control Plane
* Terraform Integration

---

# 👨‍💻 Author

Developed as a DevOps & Kubernetes engineering project focused on automation, orchestration, and cloud-native technologies.

---
