import React from 'react';

export interface Program {
  title: string;
  description: string;
}

export interface SystemCard {
  title: string;
  description: string;
  icon?: React.ElementType;
}

export interface MicroCourse {
  title: string;
}

export interface Testimonial {
  quote: string;
  authorType: "Teacher" | "School";
}

export interface BlogPost {
  title: string;
}