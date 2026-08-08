export interface Ingredient {
  amount: string;
  item: string;
}

export interface Recipe {
  id: number;
  name: string;
  category: 'Chocolate' | 'Fruit' | 'Classic' | 'Eggless';
  icon: string;
  theme: string;
  description: string;
  prep: string;
  bake: string;
  difficulty: 'Easy' | 'Medium';
  ingredients: Ingredient[];
  steps: string[];
  tip: string;
}

const baseSteps = [
  'Preheat the oven to 170°C. Grease and line two 8-inch tins.',
  'Sift the dry ingredients. In another bowl, beat the wet ingredients until smooth.',
  'Fold the dry mix into the wet mix gently. Do not overmix.',
  'Divide into the tins and bake until a skewer comes out clean. Cool completely.',
  'Layer with the suggested frosting, chill for 20 minutes, then finish and serve.'
];

export const RECIPES: Recipe[] = [
  {
    id: 1, name: 'Classic Vanilla', category: 'Classic', icon: '🍰', theme: 'vanilla',
    description: 'Soft vanilla sponge with a light buttercream finish.', prep: '25 min', bake: '32 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida / all-purpose flour' }, { amount: '250 g', item: 'sugar' },
      { amount: '250 g', item: 'unsalted butter' }, { amount: '5', item: 'eggs' },
      { amount: '120 ml', item: 'milk' }, { amount: '2 tsp', item: 'vanilla extract' },
      { amount: '2½ tsp', item: 'baking powder' }, { amount: '350 g', item: 'vanilla buttercream' }
    ], steps: baseSteps, tip: 'Use room-temperature butter, eggs and milk for an even crumb.'
  },
  {
    id: 2, name: 'Chocolate Truffle', category: 'Chocolate', icon: '🍫', theme: 'chocolate',
    description: 'Rich chocolate sponge layered with silky ganache.', prep: '30 min', bake: '35 min', difficulty: 'Medium',
    ingredients: [
      { amount: '240 g', item: 'maida / all-purpose flour' }, { amount: '60 g', item: 'cocoa powder' },
      { amount: '280 g', item: 'sugar' }, { amount: '4', item: 'eggs' }, { amount: '180 ml', item: 'milk' },
      { amount: '140 ml', item: 'neutral oil' }, { amount: '2 tsp', item: 'baking powder' },
      { amount: '400 g', item: 'dark chocolate ganache' }
    ], steps: baseSteps, tip: 'Brush each sponge layer with light sugar syrup for extra moisture.'
  },
  {
    id: 3, name: 'Red Velvet', category: 'Classic', icon: '❤️', theme: 'red-velvet',
    description: 'Velvety cocoa sponge with tangy cream-cheese frosting.', prep: '30 min', bake: '32 min', difficulty: 'Medium',
    ingredients: [
      { amount: '280 g', item: 'maida' }, { amount: '15 g', item: 'cocoa powder' }, { amount: '260 g', item: 'sugar' },
      { amount: '3', item: 'eggs' }, { amount: '220 ml', item: 'buttermilk' }, { amount: '150 ml', item: 'oil' },
      { amount: '1 tsp', item: 'red gel colour' }, { amount: '400 g', item: 'cream-cheese frosting' }
    ], steps: baseSteps, tip: 'Gel colour gives a deep red without thinning the batter.'
  },
  {
    id: 4, name: 'Black Forest', category: 'Chocolate', icon: '🍒', theme: 'black-forest',
    description: 'Chocolate sponge, whipped cream and juicy cherries.', prep: '35 min', bake: '30 min', difficulty: 'Medium',
    ingredients: [
      { amount: '250 g', item: 'maida' }, { amount: '50 g', item: 'cocoa powder' }, { amount: '260 g', item: 'sugar' },
      { amount: '5', item: 'eggs' }, { amount: '120 ml', item: 'milk' }, { amount: '100 ml', item: 'oil' },
      { amount: '250 g', item: 'pitted cherries' }, { amount: '400 ml', item: 'whipping cream' },
      { amount: '80 g', item: 'chocolate shavings' }
    ], steps: baseSteps, tip: 'Add a little cherry syrup between layers, but do not soak the sponge.'
  },
  {
    id: 5, name: 'Fresh Strawberry', category: 'Fruit', icon: '🍓', theme: 'strawberry',
    description: 'A fluffy vanilla cake filled with fresh strawberries.', prep: '30 min', bake: '32 min', difficulty: 'Easy',
    ingredients: [
      { amount: '290 g', item: 'maida' }, { amount: '240 g', item: 'sugar' }, { amount: '220 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '120 ml', item: 'milk' }, { amount: '250 g', item: 'fresh strawberries' },
      { amount: '350 ml', item: 'whipping cream' }, { amount: '2 tsp', item: 'baking powder' }
    ], steps: baseSteps, tip: 'Pat the strawberries dry before layering so the cream stays firm.'
  },
  {
    id: 6, name: 'Pineapple Cream', category: 'Fruit', icon: '🍍', theme: 'pineapple',
    description: 'Light vanilla sponge with pineapple and whipped cream.', prep: '25 min', bake: '30 min', difficulty: 'Easy',
    ingredients: [
      { amount: '290 g', item: 'maida' }, { amount: '240 g', item: 'sugar' }, { amount: '5', item: 'eggs' },
      { amount: '120 ml', item: 'oil' }, { amount: '130 ml', item: 'milk' }, { amount: '280 g', item: 'pineapple pieces' },
      { amount: '400 ml', item: 'whipping cream' }, { amount: '2 tsp', item: 'vanilla' }
    ], steps: baseSteps, tip: 'Use drained pineapple pieces; too much juice can make the layers slide.'
  },
  {
    id: 7, name: 'Eggless Vanilla', category: 'Eggless', icon: '🌼', theme: 'vanilla',
    description: 'A dependable, soft vanilla sponge made without eggs.', prep: '20 min', bake: '35 min', difficulty: 'Easy',
    ingredients: [
      { amount: '320 g', item: 'maida' }, { amount: '240 g', item: 'sugar' }, { amount: '250 g', item: 'thick curd' },
      { amount: '150 ml', item: 'oil' }, { amount: '150 ml', item: 'milk' }, { amount: '2 tsp', item: 'vanilla' },
      { amount: '1½ tsp', item: 'baking powder' }, { amount: '1 tsp', item: 'baking soda' },
      { amount: '350 g', item: 'vanilla buttercream' }
    ], steps: baseSteps, tip: 'Mix the curd and baking soda first; let it foam for five minutes.'
  },
  {
    id: 8, name: 'Eggless Chocolate', category: 'Eggless', icon: '🍫', theme: 'chocolate',
    description: 'Moist cocoa cake without eggs, finished with ganache.', prep: '20 min', bake: '35 min', difficulty: 'Easy',
    ingredients: [
      { amount: '260 g', item: 'maida' }, { amount: '60 g', item: 'cocoa powder' }, { amount: '260 g', item: 'sugar' },
      { amount: '250 g', item: 'thick curd' }, { amount: '160 ml', item: 'oil' }, { amount: '170 ml', item: 'milk' },
      { amount: '1 tsp', item: 'baking soda' }, { amount: '400 g', item: 'chocolate ganache' }
    ], steps: baseSteps, tip: 'Add 1 teaspoon instant coffee to deepen the chocolate flavour.'
  },
  {
    id: 9, name: 'Butterscotch', category: 'Classic', icon: '✨', theme: 'butterscotch',
    description: 'Caramel-flavoured sponge with crunchy praline.', prep: '35 min', bake: '32 min', difficulty: 'Medium',
    ingredients: [
      { amount: '290 g', item: 'maida' }, { amount: '230 g', item: 'brown sugar' }, { amount: '220 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '130 ml', item: 'milk' }, { amount: '2 tsp', item: 'butterscotch essence' },
      { amount: '350 ml', item: 'whipping cream' }, { amount: '120 g', item: 'cashew praline' }
    ], steps: baseSteps, tip: 'Add praline only before serving to keep it crunchy.'
  },
  {
    id: 10, name: 'Carrot Walnut', category: 'Classic', icon: '🥕', theme: 'carrot',
    description: 'Warmly spiced carrot cake with walnuts and cream cheese.', prep: '25 min', bake: '40 min', difficulty: 'Easy',
    ingredients: [
      { amount: '280 g', item: 'maida' }, { amount: '230 g', item: 'brown sugar' }, { amount: '300 g', item: 'grated carrot' },
      { amount: '4', item: 'eggs' }, { amount: '160 ml', item: 'oil' }, { amount: '100 g', item: 'chopped walnuts' },
      { amount: '2 tsp', item: 'cinnamon' }, { amount: '350 g', item: 'cream-cheese frosting' }
    ], steps: baseSteps, tip: 'Squeeze only excess water from the carrots; keep them slightly moist.'
  },
  {
    id: 11, name: 'Lemon Drizzle', category: 'Fruit', icon: '🍋', theme: 'lemon',
    description: 'Bright lemon sponge with a simple citrus glaze.', prep: '20 min', bake: '35 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida' }, { amount: '250 g', item: 'sugar' }, { amount: '240 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '3 tbsp', item: 'lemon juice' }, { amount: '2 tbsp', item: 'lemon zest' },
      { amount: '120 ml', item: 'milk' }, { amount: '180 g', item: 'icing sugar for glaze' }
    ], steps: baseSteps, tip: 'Pour the lemon glaze while the cake is still slightly warm.'
  },
  {
    id: 12, name: 'Blueberry', category: 'Fruit', icon: '🫐', theme: 'blueberry',
    description: 'Tender vanilla sponge dotted with blueberries.', prep: '20 min', bake: '36 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida' }, { amount: '240 g', item: 'sugar' }, { amount: '230 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '130 ml', item: 'milk' }, { amount: '220 g', item: 'blueberries' },
      { amount: '2 tsp', item: 'baking powder' }, { amount: '350 g', item: 'vanilla frosting' }
    ], steps: baseSteps, tip: 'Toss berries in one tablespoon of flour so they do not sink.'
  },
  {
    id: 13, name: 'Coffee Mocha', category: 'Chocolate', icon: '☕', theme: 'coffee',
    description: 'Coffee sponge layered with smooth mocha cream.', prep: '25 min', bake: '32 min', difficulty: 'Easy',
    ingredients: [
      { amount: '280 g', item: 'maida' }, { amount: '30 g', item: 'cocoa powder' }, { amount: '250 g', item: 'sugar' },
      { amount: '230 g', item: 'butter' }, { amount: '5', item: 'eggs' }, { amount: '2 tbsp', item: 'instant coffee' },
      { amount: '130 ml', item: 'milk' }, { amount: '380 g', item: 'mocha buttercream' }
    ], steps: baseSteps, tip: 'Dissolve coffee in warm milk, then cool it before adding.'
  },
  {
    id: 14, name: 'Coconut', category: 'Classic', icon: '🥥', theme: 'coconut',
    description: 'Delicate coconut sponge with creamy coconut frosting.', prep: '25 min', bake: '34 min', difficulty: 'Easy',
    ingredients: [
      { amount: '260 g', item: 'maida' }, { amount: '80 g', item: 'desiccated coconut' }, { amount: '240 g', item: 'sugar' },
      { amount: '220 g', item: 'butter' }, { amount: '5', item: 'eggs' }, { amount: '160 ml', item: 'coconut milk' },
      { amount: '2 tsp', item: 'baking powder' }, { amount: '350 g', item: 'coconut frosting' }
    ], steps: baseSteps, tip: 'Lightly toast the coconut used for decoration for a nutty aroma.'
  },
  {
    id: 15, name: 'Mango Cream', category: 'Fruit', icon: '🥭', theme: 'mango',
    description: 'Vanilla sponge with fresh mango and mango cream.', prep: '30 min', bake: '30 min', difficulty: 'Easy',
    ingredients: [
      { amount: '290 g', item: 'maida' }, { amount: '230 g', item: 'sugar' }, { amount: '5', item: 'eggs' },
      { amount: '130 ml', item: 'oil' }, { amount: '120 ml', item: 'milk' }, { amount: '300 g', item: 'ripe mango' },
      { amount: '380 ml', item: 'whipping cream' }, { amount: '2 tsp', item: 'baking powder' }
    ], steps: baseSteps, tip: 'Use firm, sweet mango so the filling is not watery.'
  },
  {
    id: 16, name: 'Orange', category: 'Fruit', icon: '🍊', theme: 'orange',
    description: 'Fresh orange cake with a fragrant citrus crumb.', prep: '20 min', bake: '36 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida' }, { amount: '240 g', item: 'sugar' }, { amount: '230 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '150 ml', item: 'fresh orange juice' }, { amount: '2 tbsp', item: 'orange zest' },
      { amount: '2 tsp', item: 'baking powder' }, { amount: '300 g', item: 'orange buttercream' }
    ], steps: baseSteps, tip: 'Use only the orange zest, avoiding the bitter white pith.'
  },
  {
    id: 17, name: 'KitKat Chocolate', category: 'Chocolate', icon: '🍫', theme: 'kitkat',
    description: 'Celebration chocolate cake wrapped with crisp KitKat.', prep: '35 min', bake: '35 min', difficulty: 'Medium',
    ingredients: [
      { amount: '240 g', item: 'maida' }, { amount: '60 g', item: 'cocoa powder' }, { amount: '270 g', item: 'sugar' },
      { amount: '4', item: 'eggs' }, { amount: '180 ml', item: 'milk' }, { amount: '140 ml', item: 'oil' },
      { amount: '350 g', item: 'chocolate ganache' }, { amount: '18–20', item: 'KitKat fingers' }
    ], steps: baseSteps, tip: 'Attach the KitKat while the ganache is soft, then tie gently with a ribbon.'
  },
  {
    id: 18, name: 'Eggless Banana', category: 'Eggless', icon: '🍌', theme: 'banana',
    description: 'Soft banana cake with cinnamon and crunchy walnuts.', prep: '15 min', bake: '42 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida' }, { amount: '200 g', item: 'brown sugar' }, { amount: '350 g', item: 'ripe mashed banana' },
      { amount: '140 ml', item: 'oil' }, { amount: '120 ml', item: 'milk' }, { amount: '90 g', item: 'walnuts' },
      { amount: '1 tsp', item: 'baking soda' }, { amount: '1 tsp', item: 'cinnamon' }
    ], steps: baseSteps, tip: 'Very ripe, spotty bananas give the best sweetness and flavour.'
  },
  {
    id: 19, name: 'Eggless Rasmalai', category: 'Eggless', icon: '🌸', theme: 'rasmalai',
    description: 'Indian fusion cake with saffron, cardamom and rasmalai.', prep: '35 min', bake: '35 min', difficulty: 'Medium',
    ingredients: [
      { amount: '310 g', item: 'maida' }, { amount: '220 g', item: 'sugar' }, { amount: '250 g', item: 'thick curd' },
      { amount: '150 ml', item: 'oil' }, { amount: '160 ml', item: 'milk' }, { amount: '½ tsp', item: 'cardamom powder' },
      { amount: '8–10', item: 'saffron strands' }, { amount: '6 small', item: 'rasmalai pieces' },
      { amount: '380 ml', item: 'whipping cream' }
    ], steps: baseSteps, tip: 'Squeeze rasmalai gently before placing it between the cake layers.'
  },
  {
    id: 20, name: 'Marble Cake', category: 'Classic', icon: '🌀', theme: 'marble',
    description: 'Beautiful swirls of vanilla and chocolate in every slice.', prep: '25 min', bake: '38 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida' }, { amount: '250 g', item: 'sugar' }, { amount: '240 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '140 ml', item: 'milk' }, { amount: '25 g', item: 'cocoa powder' },
      { amount: '2 tsp', item: 'vanilla' }, { amount: '2½ tsp', item: 'baking powder' }
    ], steps: baseSteps, tip: 'Swirl the batters only two or three times to keep the pattern clear.'
  }
];
