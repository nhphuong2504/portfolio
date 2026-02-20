---
title: "Churn Prediction Model"
slug: churn-prediction
date: "2024-06-15"
summary: "Reduced customer churn prediction error by 23% using an ensemble of XGBoost and neural networks, deployed to production serving 50K users."
tags:
  - ML
  - Python
  - XGBoost
  - scikit-learn
role: "Lead Data Scientist"
tools:
  - Python
  - XGBoost
  - scikit-learn
  - Docker
  - MLflow
links:
  github: https://github.com/example/churn-model
  demo: https://example.com/demo
metrics:
  - "23% reduction in prediction error"
  - "Deployed to 50K+ users"
  - "2.1x improvement in precision-recall"
featured: true
---

## Overview

Built an end-to-end churn prediction pipeline for a subscription business. The model identifies at-risk customers 30 days before churn, enabling proactive retention campaigns.

## The Problem

The business was losing 8% of customers monthly. Existing heuristics (e.g., login frequency) had poor precision, leading to wasted retention spend and missed at-risk users.

## Approach

- **Data**: 18 months of behavioral and transactional data; 40+ features after EDA and feature engineering.
- **Methods**: Ensemble of XGBoost (primary) and a small neural network for sequence patterns.
- **Evaluation**: Stratified time-series cross-validation; optimized for precision-recall at 30% recall threshold.

## My Role

Led data pipeline design, model development, and deployment. Collaborated with product on threshold tuning and retention experiment design.

## Key Decisions

- Chose XGBoost over deep learning for interpretability and faster iteration; added a small NN only for temporal features.
- Deployed via Docker + MLflow; A/B tested against baseline for 4 weeks before full rollout.

## Results

- **23% reduction** in prediction error (MAE) vs. baseline.
- **2.1x** improvement in precision-recall at 30% recall.
- Deployed to production; now serves 50K+ users in retention workflows.
- Retention campaigns informed by the model show 15% lift in saved customers.

## Artifacts

- [GitHub repository](https://github.com/example/churn-model)
- [Live demo](https://example.com/demo) (anonymized)
