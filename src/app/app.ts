import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RECIPES, Recipe } from './recipes';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  readonly categories = ['All', 'Chocolate', 'Fruit', 'Classic', 'Eggless'] as const;
  readonly query = signal('');
  readonly category = signal<(typeof this.categories)[number]>('All');
  readonly selectedRecipe = signal<Recipe | null>(null);

  readonly filteredRecipes = computed(() => {
    const query = this.query().trim().toLowerCase();
    const category = this.category();

    return RECIPES.filter((recipe) => {
      const matchesCategory = category === 'All' || recipe.category === category;
      const matchesQuery = !query || recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  });

  updateQuery(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  selectCategory(category: (typeof this.categories)[number]): void {
    this.category.set(category);
  }

  openRecipe(recipe: Recipe): void {
    this.selectedRecipe.set(recipe);
    document.body.style.overflow = 'hidden';
  }

  closeRecipe(): void {
    this.selectedRecipe.set(null);
    document.body.style.overflow = '';
  }
}
