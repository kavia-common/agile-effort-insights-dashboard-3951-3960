#!/bin/bash
cd /home/kavia/workspace/code-generation/agile-effort-insights-dashboard-3951-3960/effort_analysis_landing_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

