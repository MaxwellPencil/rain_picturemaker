export interface PromptStyle {
  id: string;
  name: string;
  category: string;
  description: string;
  template: string; // Has a placeholder {{subject}}
  tags: string[];
  previewColor: string;
}

export interface Category {
  id: string;
  label: string;
}

// Removing unused Image Generation types
