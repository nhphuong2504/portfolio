---
title: "Multi-Language Sentiment Analysis"
slug: nlp-sentiment
date: "2024-03-20"
summary: "Built a zero-shot sentiment classifier supporting 50+ languages with 89% accuracy, enabling global customer feedback analysis."
tags:
  - NLP
  - Python
  - Transformers
  - PyTorch
role: "Solo contributor"
tools:
  - Python
  - Hugging Face Transformers
  - PyTorch
  - FastAPI
links:
  github: https://github.com/example/nlp-sentiment
  notebook: https://colab.research.google.com/example
metrics:
  - "89% accuracy on held-out test set"
  - "50+ languages supported"
  - "Sub-100ms inference latency"
featured: true
---

## Overview

Developed a multi-language sentiment analysis model for customer feedback. Uses a zero-shot approach with minimal fine-tuning to support 50+ languages without per-language training data.

## The Problem

The company collected feedback in many languages. Training separate models per language was costly; existing off-the-shelf tools had inconsistent quality and high latency.

## Approach

- **Data**: Public sentiment datasets (IMDB, SST, multilingual benchmarks) for validation.
- **Methods**: Fine-tuned XLM-RoBERTa with a lightweight adapter; quantized for production.
- **Evaluation**: Accuracy and F1 on held-out test set; latency under 100ms P99.

## My Role

End-to-end development: model selection, fine-tuning pipeline, quantization, and FastAPI deployment.

## Key Decisions

- Zero-shot setup reduced labeling cost; adapter-based tuning allowed quick language additions.
- Quantization (INT8) cut model size 4x with <1% accuracy drop.

## Results

- **89% accuracy** on multilingual sentiment benchmark.
- **50+ languages** supported from a single model.
- **Sub-100ms** P99 inference latency in production.
- Used by support and product teams for feedback triage.

## Artifacts

- [GitHub repository](https://github.com/example/nlp-sentiment)
- [Jupyter notebook](https://colab.research.google.com/example)
