export interface Ingredient {
  amount: string;
  item: string;
}

export interface RecipeStep {
  title: string;
  time: string;
  instruction: string;
}

export interface Recipe {
  id: number;
  name: string;
  category: 'Chocolate' | 'Fruit' | 'Classic' | 'Eggless';
  image: string;
  icon: string;
  theme: string;
  description: string;
  prep: string;
  bake: string;
  difficulty: 'Easy' | 'Medium';
  ingredients: Ingredient[];
  steps: RecipeStep[];
  tip: string;
}

interface StepDetails {
  bake: string;
  wetMix: string;
  batter: string;
  filling: string;
  finish: string;
  finalSet?: string;
}

const makeSteps = ({ bake, wetMix, batter, filling, finish, finalSet = '30 min' }: StepDetails): RecipeStep[] => [
  {
    title: 'Prepare the oven and tins',
    time: '10 min',
    instruction: 'Preheat the oven to 170°C for a full 10 minutes. Grease two 8-inch tins, line the bases with baking paper and keep them ready.'
  },
  {
    title: 'Measure and sift',
    time: '8 min',
    instruction: 'Weigh every ingredient before mixing. Sift the flour, raising agents and any cocoa or spices twice so the finished sponge stays light.'
  },
  {
    title: 'Make the wet mixture',
    time: '6–8 min',
    instruction: wetMix
  },
  {
    title: 'Finish the batter',
    time: '5 min',
    instruction: batter
  },
  {
    title: 'Bake and settle in the tins',
    time: `${bake} + 10 min rest`,
    instruction: `Divide the batter evenly between the tins and bake for ${bake}. Check the centre with a skewer, then leave the cakes in their tins for 10 minutes so the crumb can settle.`
  },
  {
    title: 'Cool completely',
    time: '45–60 min',
    instruction: 'Turn the sponges onto a wire rack, remove the paper and wait until they are completely cool. Do not add cream or frosting while any warmth remains.'
  },
  {
    title: 'Fill and crumb-coat',
    time: '15 min + 20 min chill',
    instruction: `${filling} Apply a thin crumb coat, then refrigerate the assembled cake for 20 minutes before the final coating.`
  },
  {
    title: 'Decorate and allow to set',
    time: `15 min + ${finalSet} set`,
    instruction: `${finish} Let the finished cake set for ${finalSet} before slicing so the layers stay neat.`
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 1, name: 'Classic Vanilla', category: 'Classic', image: 'images/classic-vanilla.webp', icon: '🍰', theme: 'vanilla',
    description: 'Soft vanilla sponge with a light buttercream finish.', prep: '25 min', bake: '32 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida / all-purpose flour' }, { amount: '250 g', item: 'sugar' },
      { amount: '250 g', item: 'unsalted butter' }, { amount: '5', item: 'eggs' },
      { amount: '120 ml', item: 'milk' }, { amount: '2 tsp', item: 'vanilla extract' },
      { amount: '2½ tsp', item: 'baking powder' }, { amount: '350 g', item: 'vanilla buttercream' }
    ], steps: makeSteps({ bake: '30–32 min', wetMix: 'Beat the butter and sugar for 4 minutes until pale. Add the eggs one at a time, then mix in the milk and vanilla for 2 minutes.', batter: 'Fold the sifted dry ingredients into the wet mixture in three additions. Stop as soon as no dry flour remains.', filling: 'Level the cold sponges and spread an even layer of vanilla buttercream between them.', finish: 'Cover with the remaining buttercream and smooth or pipe the top as desired.' }), tip: 'Use room-temperature butter, eggs and milk for an even crumb.'
  },
  {
    id: 2, name: 'Chocolate Truffle', category: 'Chocolate', image: 'images/chocolate-truffle.webp', icon: '🍫', theme: 'chocolate',
    description: 'Rich chocolate sponge layered with silky ganache.', prep: '30 min', bake: '35 min', difficulty: 'Medium',
    ingredients: [
      { amount: '240 g', item: 'maida / all-purpose flour' }, { amount: '60 g', item: 'cocoa powder' },
      { amount: '280 g', item: 'sugar' }, { amount: '4', item: 'eggs' }, { amount: '180 ml', item: 'milk' },
      { amount: '140 ml', item: 'neutral oil' }, { amount: '2 tsp', item: 'baking powder' },
      { amount: '400 g', item: 'dark chocolate ganache' }
    ], steps: makeSteps({ bake: '33–35 min', wetMix: 'Whisk the eggs and sugar for 4 minutes, then slowly add the oil and milk and whisk for another 2 minutes.', batter: 'Fold in the flour and cocoa in three additions. Mix only until the batter is evenly chocolate-coloured.', filling: 'Level the sponges, brush lightly with sugar syrup and sandwich them with a generous layer of ganache.', finish: 'Pour slightly warm ganache over the chilled cake and smooth the sides before it firms.' }), tip: 'Brush each sponge layer with light sugar syrup for extra moisture.'
  },
  {
    id: 3, name: 'Red Velvet', category: 'Classic', image: 'images/red-velvet.webp', icon: '❤️', theme: 'red-velvet',
    description: 'Velvety cocoa sponge with tangy cream-cheese frosting.', prep: '30 min', bake: '32 min', difficulty: 'Medium',
    ingredients: [
      { amount: '280 g', item: 'maida' }, { amount: '15 g', item: 'cocoa powder' }, { amount: '260 g', item: 'sugar' },
      { amount: '3', item: 'eggs' }, { amount: '220 ml', item: 'buttermilk' }, { amount: '150 ml', item: 'oil' },
      { amount: '1 tsp', item: 'red gel colour' }, { amount: '400 g', item: 'cream-cheese frosting' }
    ], steps: makeSteps({ bake: '30–32 min', wetMix: 'Whisk the eggs and sugar for 3 minutes. Add the oil, buttermilk and red gel colour, then whisk for 2 minutes until even.', batter: 'Fold in the flour and cocoa gently. Scrape the bowl once and stop mixing as soon as the colour is uniform.', filling: 'Level the cold cakes and sandwich them with chilled cream-cheese frosting.', finish: 'Apply the final cream-cheese coating and decorate with reserved red cake crumbs.', finalSet: '45 min' }), tip: 'Gel colour gives a deep red without thinning the batter.'
  },
  {
    id: 4, name: 'Black Forest', category: 'Chocolate', image: 'images/black-forest.webp', icon: '🍒', theme: 'black-forest',
    description: 'Chocolate sponge, whipped cream and juicy cherries.', prep: '35 min', bake: '30 min', difficulty: 'Medium',
    ingredients: [
      { amount: '250 g', item: 'maida' }, { amount: '50 g', item: 'cocoa powder' }, { amount: '260 g', item: 'sugar' },
      { amount: '5', item: 'eggs' }, { amount: '120 ml', item: 'milk' }, { amount: '100 ml', item: 'oil' },
      { amount: '250 g', item: 'pitted cherries' }, { amount: '400 ml', item: 'whipping cream' },
      { amount: '80 g', item: 'chocolate shavings' }
    ], steps: makeSteps({ bake: '28–30 min', wetMix: 'Beat the eggs and sugar for 5 minutes until thick and airy. Stream in the milk and oil and mix for 1 minute.', batter: 'Fold in the flour and cocoa in three light additions, keeping as much air in the batter as possible.', filling: 'Brush each layer lightly with cherry syrup, then add whipped cream and chopped cherries.', finish: 'Cover with whipped cream, press chocolate shavings onto the sides and top with whole cherries.', finalSet: '45 min' }), tip: 'Add a little cherry syrup between layers, but do not soak the sponge.'
  },
  {
    id: 5, name: 'Fresh Strawberry', category: 'Fruit', image: 'images/fresh-strawberry.webp', icon: '🍓', theme: 'strawberry',
    description: 'A fluffy vanilla cake filled with fresh strawberries.', prep: '30 min', bake: '32 min', difficulty: 'Easy',
    ingredients: [
      { amount: '290 g', item: 'maida' }, { amount: '240 g', item: 'sugar' }, { amount: '220 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '120 ml', item: 'milk' }, { amount: '250 g', item: 'fresh strawberries' },
      { amount: '350 ml', item: 'whipping cream' }, { amount: '2 tsp', item: 'baking powder' }
    ], steps: makeSteps({ bake: '30–32 min', wetMix: 'Cream the butter and sugar for 4 minutes. Beat in the eggs one at a time, followed by the milk.', batter: 'Fold in the sifted flour and baking powder in three additions without overworking the batter.', filling: 'Spread whipped cream over the levelled sponge and arrange dry strawberry slices in a single layer.', finish: 'Coat with the remaining cream and decorate with whole or halved strawberries.', finalSet: '45 min' }), tip: 'Pat the strawberries dry before layering so the cream stays firm.'
  },
  {
    id: 6, name: 'Pineapple Cream', category: 'Fruit', image: 'images/pineapple-cream.webp', icon: '🍍', theme: 'pineapple',
    description: 'Light vanilla sponge with pineapple and whipped cream.', prep: '25 min', bake: '30 min', difficulty: 'Easy',
    ingredients: [
      { amount: '290 g', item: 'maida' }, { amount: '240 g', item: 'sugar' }, { amount: '5', item: 'eggs' },
      { amount: '120 ml', item: 'oil' }, { amount: '130 ml', item: 'milk' }, { amount: '280 g', item: 'pineapple pieces' },
      { amount: '400 ml', item: 'whipping cream' }, { amount: '2 tsp', item: 'vanilla' }
    ], steps: makeSteps({ bake: '28–30 min', wetMix: 'Whisk the eggs and sugar for 4 minutes. Slowly add the oil, milk and vanilla and whisk for 2 minutes.', batter: 'Fold in the sifted flour in three additions until the batter is smooth and airy.', filling: 'Brush the layers lightly with drained pineapple syrup, then add whipped cream and well-drained pineapple pieces.', finish: 'Cover with cream and decorate with small pineapple pieces just before the final chill.', finalSet: '45 min' }), tip: 'Use drained pineapple pieces; too much juice can make the layers slide.'
  },
  {
    id: 7, name: 'Eggless Vanilla', category: 'Eggless', image: 'images/eggless-vanilla.webp', icon: '🌼', theme: 'vanilla',
    description: 'A dependable, soft vanilla sponge made without eggs.', prep: '20 min', bake: '35 min', difficulty: 'Easy',
    ingredients: [
      { amount: '320 g', item: 'maida' }, { amount: '240 g', item: 'sugar' }, { amount: '250 g', item: 'thick curd' },
      { amount: '150 ml', item: 'oil' }, { amount: '150 ml', item: 'milk' }, { amount: '2 tsp', item: 'vanilla' },
      { amount: '1½ tsp', item: 'baking powder' }, { amount: '1 tsp', item: 'baking soda' },
      { amount: '350 g', item: 'vanilla buttercream' }
    ], steps: makeSteps({ bake: '33–35 min', wetMix: 'Mix the curd and baking soda and leave it for 5 minutes to foam. Whisk in the sugar, oil, milk and vanilla for 2 minutes.', batter: 'Fold the sifted flour and baking powder into the foamy mixture in three additions; do not beat out the air.', filling: 'Level the fully cooled sponges and sandwich them with vanilla buttercream.', finish: 'Add the final buttercream layer and smooth the top with a warm palette knife.' }), tip: 'Mix the curd and baking soda first; let it foam for five minutes.'
  },
  {
    id: 8, name: 'Eggless Chocolate', category: 'Eggless', image: 'images/eggless-chocolate.webp', icon: '🍫', theme: 'chocolate',
    description: 'Moist cocoa cake without eggs, finished with ganache.', prep: '20 min', bake: '35 min', difficulty: 'Easy',
    ingredients: [
      { amount: '260 g', item: 'maida' }, { amount: '60 g', item: 'cocoa powder' }, { amount: '260 g', item: 'sugar' },
      { amount: '250 g', item: 'thick curd' }, { amount: '160 ml', item: 'oil' }, { amount: '170 ml', item: 'milk' },
      { amount: '1 tsp', item: 'baking soda' }, { amount: '400 g', item: 'chocolate ganache' }
    ], steps: makeSteps({ bake: '33–35 min', wetMix: 'Whisk the curd, sugar and baking soda and rest for 5 minutes. Add the oil and milk and whisk for 2 minutes.', batter: 'Fold in the flour and cocoa in three additions until no pale streaks remain; avoid vigorous mixing.', filling: 'Level the cooled sponges and sandwich them with a thick, even layer of ganache.', finish: 'Coat the chilled cake with the remaining ganache and make a simple drip or smooth finish.' }), tip: 'Add 1 teaspoon instant coffee to deepen the chocolate flavour.'
  },
  {
    id: 9, name: 'Butterscotch', category: 'Classic', image: 'images/butterscotch.webp', icon: '✨', theme: 'butterscotch',
    description: 'Caramel-flavoured sponge with crunchy praline.', prep: '35 min', bake: '32 min', difficulty: 'Medium',
    ingredients: [
      { amount: '290 g', item: 'maida' }, { amount: '230 g', item: 'brown sugar' }, { amount: '220 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '130 ml', item: 'milk' }, { amount: '2 tsp', item: 'butterscotch essence' },
      { amount: '350 ml', item: 'whipping cream' }, { amount: '120 g', item: 'cashew praline' }
    ], steps: makeSteps({ bake: '30–32 min', wetMix: 'Cream the butter and brown sugar for 4 minutes. Beat in the eggs one at a time, then add milk and butterscotch essence.', batter: 'Fold the sifted flour into the mixture in three additions until just combined.', filling: 'Sandwich the levelled sponges with whipped cream, caramel and a light sprinkle of praline.', finish: 'Cover with cream, add a caramel drip and press praline around the base shortly before serving.', finalSet: '30 min' }), tip: 'Add praline only before serving to keep it crunchy.'
  },
  {
    id: 10, name: 'Carrot Walnut', category: 'Classic', image: 'images/carrot-walnut.webp', icon: '🥕', theme: 'carrot',
    description: 'Warmly spiced carrot cake with walnuts and cream cheese.', prep: '25 min', bake: '40 min', difficulty: 'Easy',
    ingredients: [
      { amount: '280 g', item: 'maida' }, { amount: '230 g', item: 'brown sugar' }, { amount: '300 g', item: 'grated carrot' },
      { amount: '4', item: 'eggs' }, { amount: '160 ml', item: 'oil' }, { amount: '100 g', item: 'chopped walnuts' },
      { amount: '2 tsp', item: 'cinnamon' }, { amount: '350 g', item: 'cream-cheese frosting' }
    ], steps: makeSteps({ bake: '38–40 min', wetMix: 'Whisk the eggs and brown sugar for 3 minutes, then add the oil and whisk for 1 minute.', batter: 'Fold in the flour and cinnamon, followed by the grated carrot and walnuts. Stop when everything is evenly distributed.', filling: 'Level the cooled cakes and spread cream-cheese frosting between the layers.', finish: 'Coat with the remaining frosting and finish with chopped walnuts.', finalSet: '45 min' }), tip: 'Squeeze only excess water from the carrots; keep them slightly moist.'
  },
  {
    id: 11, name: 'Lemon Drizzle', category: 'Fruit', image: 'images/lemon-drizzle.webp', icon: '🍋', theme: 'lemon',
    description: 'Bright lemon sponge with a simple citrus glaze.', prep: '20 min', bake: '35 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida' }, { amount: '250 g', item: 'sugar' }, { amount: '240 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '3 tbsp', item: 'lemon juice' }, { amount: '2 tbsp', item: 'lemon zest' },
      { amount: '120 ml', item: 'milk' }, { amount: '180 g', item: 'icing sugar for glaze' }
    ], steps: makeSteps({ bake: '33–35 min', wetMix: 'Cream the butter, sugar and lemon zest for 4 minutes. Add the eggs one at a time, then mix in the milk and lemon juice.', batter: 'Fold in the sifted flour in three additions until no dry pockets remain.', filling: 'Level the cooled sponges and spread a thin layer of lemon buttercream or glaze between them.', finish: 'Spoon the lemon glaze over the cake while it is still slightly warm and allow it to run down the sides.', finalSet: '25 min' }), tip: 'Pour the lemon glaze while the cake is still slightly warm.'
  },
  {
    id: 12, name: 'Blueberry', category: 'Fruit', image: 'images/blueberry.webp', icon: '🫐', theme: 'blueberry',
    description: 'Tender vanilla sponge dotted with blueberries.', prep: '20 min', bake: '36 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida' }, { amount: '240 g', item: 'sugar' }, { amount: '230 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '130 ml', item: 'milk' }, { amount: '220 g', item: 'blueberries' },
      { amount: '2 tsp', item: 'baking powder' }, { amount: '350 g', item: 'vanilla frosting' }
    ], steps: makeSteps({ bake: '34–36 min', wetMix: 'Cream the butter and sugar for 4 minutes. Beat in the eggs one at a time, then add the milk.', batter: 'Fold in the flour and baking powder, then gently fold through flour-coated blueberries in the final minute.', filling: 'Level the cold sponges and sandwich them with vanilla frosting and a few crushed blueberries.', finish: 'Coat with frosting, add a blueberry drip if desired and decorate with dry berries.', finalSet: '45 min' }), tip: 'Toss berries in one tablespoon of flour so they do not sink.'
  },
  {
    id: 13, name: 'Coffee Mocha', category: 'Chocolate', image: 'images/coffee-mocha.webp', icon: '☕', theme: 'coffee',
    description: 'Coffee sponge layered with smooth mocha cream.', prep: '25 min', bake: '32 min', difficulty: 'Easy',
    ingredients: [
      { amount: '280 g', item: 'maida' }, { amount: '30 g', item: 'cocoa powder' }, { amount: '250 g', item: 'sugar' },
      { amount: '230 g', item: 'butter' }, { amount: '5', item: 'eggs' }, { amount: '2 tbsp', item: 'instant coffee' },
      { amount: '130 ml', item: 'milk' }, { amount: '380 g', item: 'mocha buttercream' }
    ], steps: makeSteps({ bake: '30–32 min', wetMix: 'Dissolve the coffee in warm milk and cool it for 10 minutes. Cream the butter and sugar for 4 minutes, then beat in the eggs.', batter: 'Fold in the flour and cocoa alternately with the cooled coffee milk until evenly combined.', filling: 'Level the sponges and sandwich them with mocha buttercream.', finish: 'Coat with the remaining buttercream and add chocolate curls or a light cocoa dusting.' }), tip: 'Dissolve coffee in warm milk, then cool it before adding.'
  },
  {
    id: 14, name: 'Coconut', category: 'Classic', image: 'images/coconut.webp', icon: '🥥', theme: 'coconut',
    description: 'Delicate coconut sponge with creamy coconut frosting.', prep: '25 min', bake: '34 min', difficulty: 'Easy',
    ingredients: [
      { amount: '260 g', item: 'maida' }, { amount: '80 g', item: 'desiccated coconut' }, { amount: '240 g', item: 'sugar' },
      { amount: '220 g', item: 'butter' }, { amount: '5', item: 'eggs' }, { amount: '160 ml', item: 'coconut milk' },
      { amount: '2 tsp', item: 'baking powder' }, { amount: '350 g', item: 'coconut frosting' }
    ], steps: makeSteps({ bake: '32–34 min', wetMix: 'Cream the butter and sugar for 4 minutes. Add the eggs one at a time, followed by the coconut milk.', batter: 'Fold in the flour, baking powder and desiccated coconut in three additions.', filling: 'Level the cooled sponges and spread coconut frosting evenly between them.', finish: 'Cover with frosting and press lightly toasted coconut over the top and sides.' }), tip: 'Lightly toast the coconut used for decoration for a nutty aroma.'
  },
  {
    id: 15, name: 'Mango Cream', category: 'Fruit', image: 'images/mango-cream.webp', icon: '🥭', theme: 'mango',
    description: 'Vanilla sponge with fresh mango and mango cream.', prep: '30 min', bake: '30 min', difficulty: 'Easy',
    ingredients: [
      { amount: '290 g', item: 'maida' }, { amount: '230 g', item: 'sugar' }, { amount: '5', item: 'eggs' },
      { amount: '130 ml', item: 'oil' }, { amount: '120 ml', item: 'milk' }, { amount: '300 g', item: 'ripe mango' },
      { amount: '380 ml', item: 'whipping cream' }, { amount: '2 tsp', item: 'baking powder' }
    ], steps: makeSteps({ bake: '28–30 min', wetMix: 'Whisk the eggs and sugar for 4 minutes. Slowly add the oil and milk and whisk for another 2 minutes.', batter: 'Fold in the sifted flour and baking powder in three additions, keeping the batter airy.', filling: 'Sandwich the cooled layers with whipped cream and small cubes of firm, ripe mango.', finish: 'Cover with mango cream and decorate with thin mango slices just before chilling.', finalSet: '45 min' }), tip: 'Use firm, sweet mango so the filling is not watery.'
  },
  {
    id: 16, name: 'Orange', category: 'Fruit', image: 'images/orange.webp', icon: '🍊', theme: 'orange',
    description: 'Fresh orange cake with a fragrant citrus crumb.', prep: '20 min', bake: '36 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida' }, { amount: '240 g', item: 'sugar' }, { amount: '230 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '150 ml', item: 'fresh orange juice' }, { amount: '2 tbsp', item: 'orange zest' },
      { amount: '2 tsp', item: 'baking powder' }, { amount: '300 g', item: 'orange buttercream' }
    ], steps: makeSteps({ bake: '34–36 min', wetMix: 'Cream the butter, sugar and orange zest for 4 minutes. Add the eggs one at a time, followed by the orange juice.', batter: 'Fold in the flour and baking powder in three additions until just combined.', filling: 'Level the cooled sponges and spread orange buttercream between the layers.', finish: 'Coat with the remaining buttercream and finish with candied orange slices.' }), tip: 'Use only the orange zest, avoiding the bitter white pith.'
  },
  {
    id: 17, name: 'KitKat Chocolate', category: 'Chocolate', image: 'images/kitkat-chocolate.webp', icon: '🍫', theme: 'kitkat',
    description: 'Celebration chocolate cake wrapped with crisp KitKat.', prep: '35 min', bake: '35 min', difficulty: 'Medium',
    ingredients: [
      { amount: '240 g', item: 'maida' }, { amount: '60 g', item: 'cocoa powder' }, { amount: '270 g', item: 'sugar' },
      { amount: '4', item: 'eggs' }, { amount: '180 ml', item: 'milk' }, { amount: '140 ml', item: 'oil' },
      { amount: '350 g', item: 'chocolate ganache' }, { amount: '18–20', item: 'KitKat fingers' }
    ], steps: makeSteps({ bake: '33–35 min', wetMix: 'Whisk the eggs and sugar for 4 minutes, then slowly add the oil and milk and whisk for 2 minutes.', batter: 'Fold the flour and cocoa into the wet mixture in three additions until evenly coloured.', filling: 'Level the cooled sponges and sandwich them with chocolate ganache.', finish: 'Coat with soft ganache, attach the KitKat fingers around the sides and tie loosely with a ribbon.', finalSet: '30 min' }), tip: 'Attach the KitKat while the ganache is soft, then tie gently with a ribbon.'
  },
  {
    id: 18, name: 'Eggless Banana', category: 'Eggless', image: 'images/eggless-banana.webp', icon: '🍌', theme: 'banana',
    description: 'Soft banana cake with cinnamon and crunchy walnuts.', prep: '15 min', bake: '42 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida' }, { amount: '200 g', item: 'brown sugar' }, { amount: '350 g', item: 'ripe mashed banana' },
      { amount: '140 ml', item: 'oil' }, { amount: '120 ml', item: 'milk' }, { amount: '90 g', item: 'walnuts' },
      { amount: '1 tsp', item: 'baking soda' }, { amount: '1 tsp', item: 'cinnamon' }
    ], steps: makeSteps({ bake: '40–42 min', wetMix: 'Mash the bananas until nearly smooth. Whisk in the brown sugar, oil and milk for 2 minutes.', batter: 'Fold in the flour, baking soda and cinnamon, then add the walnuts and mix only until distributed.', filling: 'Once fully cool, level the cake if needed; it may be served plain or with a thin layer of vanilla frosting.', finish: 'Finish with walnuts and banana chips, keeping the decoration light so the soft cake is not compressed.', finalSet: '20 min' }), tip: 'Very ripe, spotty bananas give the best sweetness and flavour.'
  },
  {
    id: 19, name: 'Eggless Rasmalai', category: 'Eggless', image: 'images/eggless-rasmalai.webp', icon: '🌸', theme: 'rasmalai',
    description: 'Indian fusion cake with saffron, cardamom and rasmalai.', prep: '35 min', bake: '35 min', difficulty: 'Medium',
    ingredients: [
      { amount: '310 g', item: 'maida' }, { amount: '220 g', item: 'sugar' }, { amount: '250 g', item: 'thick curd' },
      { amount: '150 ml', item: 'oil' }, { amount: '160 ml', item: 'milk' }, { amount: '½ tsp', item: 'cardamom powder' },
      { amount: '8–10', item: 'saffron strands' }, { amount: '6 small', item: 'rasmalai pieces' },
      { amount: '380 ml', item: 'whipping cream' }
    ], steps: makeSteps({ bake: '33–35 min', wetMix: 'Mix the curd and raising agents and rest for 5 minutes. Whisk in sugar, oil, milk, saffron and cardamom for 2 minutes.', batter: 'Fold the sifted flour into the foamy mixture in three additions without overmixing.', filling: 'Brush the layers lightly with rasmalai milk, then add whipped cream and gently squeezed rasmalai pieces.', finish: 'Cover with cream and decorate with saffron, pistachios and small rasmalai pieces.', finalSet: '60 min' }), tip: 'Squeeze rasmalai gently before placing it between the cake layers.'
  },
  {
    id: 20, name: 'Marble Cake', category: 'Classic', image: 'images/marble-cake.webp', icon: '🌀', theme: 'marble',
    description: 'Beautiful swirls of vanilla and chocolate in every slice.', prep: '25 min', bake: '38 min', difficulty: 'Easy',
    ingredients: [
      { amount: '300 g', item: 'maida' }, { amount: '250 g', item: 'sugar' }, { amount: '240 g', item: 'butter' },
      { amount: '5', item: 'eggs' }, { amount: '140 ml', item: 'milk' }, { amount: '25 g', item: 'cocoa powder' },
      { amount: '2 tsp', item: 'vanilla' }, { amount: '2½ tsp', item: 'baking powder' }
    ], steps: makeSteps({ bake: '36–38 min', wetMix: 'Cream the butter and sugar for 4 minutes. Beat in the eggs one at a time, then add the milk and vanilla.', batter: 'Fold in the flour, divide the batter, mix cocoa into one part, then alternate both batters in the tins and swirl two or three times.', filling: 'Level the cold sponges and add a thin layer of vanilla or chocolate buttercream between them.', finish: 'Apply a light frosting or simple chocolate glaze, leaving the marbled sponge as the focus.' }), tip: 'Swirl the batters only two or three times to keep the pattern clear.'
  }
];
