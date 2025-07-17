import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function FeatureEngineering() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Automated Feature Engineering Suggestions</Typography>
        <List>
          <ListItem><ListItemText primary="Polynomial features for Age and Fare" /></ListItem>
          <ListItem><ListItemText primary="One-hot encode categorical variables: Sex, Embarked" /></ListItem>
          <ListItem><ListItemText primary="Log-transform skewed features: Fare" /></ListItem>
          <ListItem><ListItemText primary="Impute missing values: Age (median), Cabin (missing indicator)" /></ListItem>
        </List>
        <Typography variant="caption" color="text.secondary">Simulated: Feature engineering pipeline suggestions</Typography>
      </CardContent>
    </Card>
  );
}
