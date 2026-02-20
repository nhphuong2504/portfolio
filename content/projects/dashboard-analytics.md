---
title: "Executive Analytics Dashboard"
slug: dashboard-analytics
date: "2024-01-10"
summary: "Created an interactive dashboard that cut report preparation time by 70% and surfaced previously hidden trends."
tags:
  - Data Visualization
  - Python
  - SQL
  - Dashboard
role: "Data Analyst → Data Scientist"
tools:
  - Python
  - SQL
  - Plotly
  - Streamlit
links:
  github: https://github.com/example/dashboard
metrics:
  - "70% reduction in report preparation time"
  - "3 new business insights surfaced"
featured: true
---

## Overview

Designed and built an executive analytics dashboard replacing manual weekly reports. Enables self-service exploration of KPIs with drill-down and filtering.

## The Problem

The analytics team spent ~10 hours/week preparing static reports. Stakeholders could not explore data independently; insights were delayed.

## Approach

- **Data**: Centralized in a data warehouse; dbt for transformations.
- **Methods**: Streamlit app with Plotly charts; parameterized SQL for filters.
- **Delivery**: Hosted internally; refreshed daily via scheduled jobs.

## My Role

Led requirements gathering, data modeling, and development. Trained stakeholders on self-service usage.

## Key Decisions

- Chose Streamlit over Tableau/Power BI for rapid iteration and full control over logic.
- Prioritized 5 core views; deferred advanced features to Phase 2.

## Results

- **70% reduction** in report preparation time.
- **3 previously hidden trends** surfaced (e.g., regional performance gaps).
- Stakeholders now run ad-hoc analysis independently.
- Served as a stepping stone to more advanced ML work.

## Artifacts

- [GitHub repository](https://github.com/example/dashboard)
