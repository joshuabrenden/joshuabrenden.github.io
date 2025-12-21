const recipes = [
    {
        id: 1,
        name: "Ham Appetillas",
        category: "appetizers",
        tags: [],
        ingredients: [
            "1 pkg Super Size Flour Tortillas",
            "2 8oz pkgs cream cheese softened",
            "1/3 cup mayonnaise",
            "2 Tbsp green onion-chopped",
            "1/4 cup black olives chopped",
            "2 -2 1/2 oz pkg sliced, pressed, cooked ham"
        ],
        instructions: [
            "Remove Tortillas from the refrigerator.",
            "Combine cream cheese, mayonnaise, onions and olives.",
            "Spread thin layer of mixture on tortilla.",
            "Arrange four slices of ham over cheese.",
            "Tightly roll up tortilla.",
            "Wrap individually in plastic wrap.",
            "Refrigerate at least 3 hrs.",
            "Slice into 3/4\"slices"
        ]
    },
    {
        id: 2,
        name: "Pine Nut Brie Nibble",
        category: "appetizers",
        tags: [],
        ingredients: [
            "1 cup pine nuts",
            "1 stick of butter bread",
            "1/2 cup fresh basil",
            "3 cloves garlic",
            "1/3 cup chopped sun dried tomato"
        ],
        instructions: [
            "Hollow out bread and save removed pieces.",
            "Spread 1/2 butter in hollow of round.",
            "Sauté pine nuts and basil in hollow or round.",
            "Layer brie, garlic, tomatoes, nuts and basil in hollow with additional nuts.",
            "Pour remaining butter over top and sprinkle with additional nuts.",
            "Bake 30 min."
        ]
    },
    {
        id: 3,
        name: "Stuffed Mushrooms",
        category: "appetizers",
        tags: [],
        ingredients: [
            "12 to 16 fresh mushrooms - dash pepper",
            "4 slices bacon, diced",
            "1/2 medium onion sliced",
            "1/4 green pepper diced",
            "1/2 cup bread crumbs"
        ],
        instructions: [
            "Wash mushrooms, remove stems, chop stems.",
            "Saute bacon, onion, pepper, stems until seasonings.",
            "Pour oil or excess fat, add to cream cheese.",
            "Mound on top of mushroom dip in bread crumbs.",
            "Put on 9x13 glass pan and add 1/4 cup hot water.",
            "Bake 375 degrees for 15 - 20 min."
        ]
    },
    {
        id: 4,
        name: "Vegetable Pizza",
        category: "appetizers",
        tags: [],
        ingredients: [
            "2 pkg crescent rolls",
            "8 oz each cream cheese",
            "2 pkg (6oz each) cream cheese",
            "1/4 cup mayonnaise",
            "1 tsp dill weed"
        ],
        instructions: [
            "Place crescent rolls on cookie sheet - just like pizza dough.",
            "Bake at 400 degrees for 10 min.",
            "Combine cream cheese, mayonnaise and dill on dough.",
            "Add any cut up raw vegetables you like (olive and cheddar are good"
        ]
    },
    {
        id: 5,
        name: "Wontons",
        category: "appetizers",
        tags: [],
        ingredients: [
            "1 pound ground pork",
            "1/2 cup chopped green onions",
            "1 tsp sesame oil",
            "1 tsp samba oelek chili paste",
            "1 tsp garlic, minced",
            "1/4 tsp ground ginger"
        ],
        instructions: [
            "In a bowl mix all ingredients except the wonton wrappers and run oil.",
            "Place a tsp of mixture in the center of wrapper, wet fingers and run around edges. Cover wrappers with damp paper towel until ready to use.",
            "Seal edges. Cover wrappers with damp paper towel until ready to use.",
            "In pot heat canola oil (Setting 3) on our stove) over medium high heat.",
            "Fry wontons until golden brown, about 3-4 min per side. Salt lightly.",
            "To freeze place on baking sheet and put in freezer. Once frozen divide up into zip lock bags. (We eat 11 for the two of us).",
            "When ready to eat remove from freezer and fry in oil."
        ]
    },
    {
        id: 6,
        name: "Cranberry Sparkler",
        category: "beverages",
        tags: [],
        ingredients: [
            "1 6oz can frozen lemonade",
            "6 oz cran frozen limeade",
            "1/4 cup sugar",
            "700ml"
        ],
        instructions: [
            "Combine stir and chill.",
            "Just before serving add 4 cups 7 up"
        ]
    },
    {
        id: 7,
        name: "Daiquiri",
        category: "beverages",
        tags: [],
        ingredients: [
            "3 6 oz cans frozen lemonade",
            "6 oz canter frozen limeade",
            "3 cans water",
            "200 ml white rum"
        ],
        instructions: [
            "Mix and put in freezer. Serve as slush."
        ]
    },
    {
        id: 8,
        name: "Hot Apple Cider",
        category: "beverages",
        tags: [],
        ingredients: [
            "1 gal apple cider",
            "1 qt ginger ale",
            "3 cinnamon sticks",
            "23 cinnamon sticks",
            "2 cloves"
        ],
        instructions: [
            "Heat and serve"
        ]
    },
    {
        id: 9,
        name: "Russian Tea",
        category: "beverages",
        tags: [],
        ingredients: [
            "1 cup Tang",
            "1 pkg Wyler's lemonade mix",
            "1/2 cup sugar",
            "1/2 tsp cinnamon",
            "1/4 tsp ground cloves"
        ],
        instructions: [
            "Mix well",
            "2 tsp of above with 1 cup boiling water for hot tea"
        ]
    },
    {
        id: 10,
        name: "Orange Brandy Punch",
        category: "beverages",
        tags: [],
        ingredients: [
            "3 cups sugar",
            "3 tea bags orange",
            "1 12oz can frozen orange juice concentrate",
            "1 12 oz can frozen lemonade"
        ],
        instructions: [
            "Ship 5 cups of water to boil add sugar and stir",
            "In separate pan boil 2 cups of water, add 3 tea bags and steep 5 min",
            "Mix both of above together",
            "Add brandy and put in freezer until slush.",
            "Serve 2/3 slush to 1/3 7up"
        ]
    },
    {
        id: 11,
        name: "Raspberry Fruit Punch",
        category: "beverages",
        tags: [],
        ingredients: [
            "1 can red \"Five Alive frozen\"",
            "2 cans water",
            "2 qts Raspberry juice-Chilled",
            "1/2 bottle white soda a chilled",
            "1 pint Raspberry sherbet"
        ],
        instructions: [
            "Add soda and sherbet just before serving"
        ]
    },
    {
        id: 12,
        name: "Banana Bread",
        category: "breads",
        tags: [],
        ingredients: [
            "1 cup sugar",
            "1/2 cup butter",
            "3 mashed bananas",
            "2 eggs",
            "2 cups flour",
            "1/2 cup sour milk",
            "1 tsp soda"
        ],
        instructions: [
            "Beat sugar and margarine.",
            "Add bananas and eggs and beat",
            "Add remaining ingredients and beat at medium speed",
            "Grease 2 small pans or 1 large loaf pan and bake: 350 degrees 40 min."
        ]
    },
    {
        id: 13,
        name: "Apple Puff",
        category: "breads",
        tags: [],
        ingredients: [
            "4 apples peeled, cored, sliced",
            "1 4 Tbsp butter",
            "3 1 Tbsp cinnamon",
            "4 1/2 tsp cinnamon",
            "5 1 cup milk",
            "6 1/4 tsp salt",
            "7 1/8 tsp salt"
        ],
        instructions: [
            "Sauté apples in butter until tender and crisp (10-15 min)",
            "Remove from heat. Mix sugar & cinnamon sprinkle over apples-mix",
            "Beat oven to 425 degrees. Put 1 Tbsp butter in 10\" fry pan place in",
            "oven until butter melts. Put 1/3 cup butter in 10\" fry pan place in",
            "Remove from oven. Add 2 tsp rum or brandy to apples and spoon into",
            "center of egg puffs."
        ]
    },
    {
        id: 14,
        name: "Carmel Rolls - Sweet Bread",
        category: "breads",
        tags: [],
        ingredients: [
            "While dough is rising make Carmel Mixture: Combine butter",
            "brown sugar, corn syrup and cream in a small sauce pan over medium",
            "heat. While cough is rising make Carmel Mixture: Combine butter",
            "Roll them out to 9 x 12 rectangles. Spread 1/8 cup of butter over each",
            "Roll up jellyroll style and cut each roll into 6 pieces placing each piece",
            "on baking sheet and put in freezer. Once frozen divide",
            "up into zip lock bags. (We eat 11 for the two of us).",
            "When ready to eat remove from freezer and fry in oil."
        ],
        instructions: [
            "Place on top of syrup",
            "equal parts and one at a time",
            "Spread 1/18 cup of butter over each",
            "In pot heat canola oil (Setting 3) on our stove) over medium high heat.",
            "Punch risen dough down. Split into two equal parts and one at a time",
            "Fry wantons until golden brown, about 3-4 min per side. Salt lightly",
            "To freeze place on baking sheet and put in freezer. Once frozen divide",
            "Roll them out to 9 x 12 rectangles. Spread 1/8 cup of butter over each",
            "Sprinkle wasted pecans on top of syrup",
            "Punch risen dough down. Split into two equal parts and one at a time",
            "10. Roll up jellyroll style and cut each roll into 6 pieces placing each piece",
            "11. Toast pecans: Chop place in 350°F for 8 minutes, stirring once.",
            "12. Toast pecans: Chop place in 350°F for 8 minutes, stirring once."
        ]
    },
    {
        id: 15,
        name: "Crispy Oatmeal Muffins",
        category: "breads",
        tags: [],
        ingredients: [
            "1 cup old-fashioned rolled oats",
            "2 1/4 cup old-fashioned rolled oats",
            "3 3/4 cup whole wheat flour",
            "4 1/3 cup toasted wheat germ",
            "5 1/3 cup plus 1 Tbsp sugar",
            "6 1/3 cup plus 1 Tbsp sugar",
            "7 1/2 tsp baking soda"
        ],
        instructions: [
            "Heat oven to 375 degrees stir often. Put in bowl and cool",
            "Toast oats to 10 minutes; sugar, baking powder, soda, salt to oatmeal",
            "Add flour, corn, 1/3 cup sugar and zest in small bowl - stir until just mixed",
            "Spoon 2 Tbs in greased muffin cups",
            "Combine 1/3 cup coconut, milk and almond. placing 2 tsp in center of each",
            "Beat lemon to 375 degrees for 20 minutes. Cool for 5 min before removing",
            "Bake lemon to 425 degrees for 20 minutes. Cool for 5 min before removing",
            "Beat or whisk mixture in center or dry ingredients - stir until just mixed",
            "Makes 1 doz."
        ]
    },
    {
        id: 16,
        name: "Christmas Bread",
        category: "breads",
        tags: ["christmas"],
        ingredients: [
            "1 cup milk",
            "1/4 cup shortening",
            "1/4 cup sugar",
            "2 tsp salt",
            "1 1/4 cup lukewarm water",
            "1/2 cup orange juice"
        ],
        instructions: [
            "Scald milk. Pour over shortening, sugar and salt.",
            "Beat in water, then add eggs.",
            "Beat in 3 total, place 1/6 balls down. Cover and let rise",
            "Make into two round and egg together and then add",
            "Make into two feet of 30 min. (Bake each tea individually)",
            "Make into two feet of 30 min. (Bake each tea individually)"
        ]
    },
    {
        id: 17,
        name: "Corn Meal Muffins",
        category: "breads",
        tags: [],
        ingredients: [
            "1 1/4 cup flour",
            "3/4 cup corn meal",
            "1/4 cup sugar",
            "2 tsp baking powder",
            "1/2 tsp salt",
            "1 cup milk"
        ],
        instructions: [
            "Mix dry ingredients",
            "Add wet ingredients",
            "Bake 400 degrees in 8\" square pan for 20 - 25 min OR",
            "Bake 400 degrees in muffin tins 15 - 20 min."
        ]
    },
    {
        id: 18,
        name: "Fashioned Granola",
        category: "breads",
        tags: [],
        ingredients: [
            "1/2 cup honey",
            "1/4 cup brown sugar",
            "1 cup sliced or slivered almonds",
            "1 cup raw peanuts",
            "1/2 cup oil",
            "1/2 cup water"
        ],
        instructions: [
            "Bake in 9 x 13 pan at 325 degrees for 1 hr 20 min, stirring every 30 min",
            "Turn off oven - add 1 cup raisins or 1 cup dried cherries",
            "Put back into cooling oven"
        ]
    },
    {
        id: 19,
        name: "Baked Oatmeal",
        category: "breads",
        tags: [],
        ingredients: [
            "1/2 cup butter",
            "3 cup brown sugar",
            "1 large egg",
            "4 1/2 cups old fashioned oatmeal",
            "3 tsp baking powder",
            "1 1/2 tsp salt",
            "1 1/2 cups milk"
        ],
        instructions: [
            "Heat oven to 350 degrees",
            "Melt butter and add all other ingredients. Mix well.",
            "Bake increased large, pan for 45 min",
            "Serve warm with milk.",
            "Can be made night before, refrigerated and baked in the morning for 1 hr at 300 degrees."
        ]
    },
    {
        id: 20,
        name: "Apricot Bread",
        category: "breads",
        tags: [],
        ingredients: [
            "1 cup dried apricots 1/2 11 oz pkg",
            "2 cups flour",
            "2 tsp baking powder",
            "1/4 tsp soda",
            "1/2 tsp salt",
            "1/2 cup nuts"
        ],
        instructions: [
            "Soak apricots for 30 min until soft. Cut into 1/2\" pieces",
            "Mix sugar, butter and egg together and then add",
            "Water and orange juice",
            "Next add dry ingredients flour, baking powder, baking soda and salt",
            "Blend in apricots and nuts",
            "Pour into 1 large or two small loaf pans and let stand 20 min.",
            "Bake 350 degrees for 40 - 45 min."
        ]
    },
    {
        id: 21,
        name: "Cranberry Bread",
        category: "breads",
        tags: [],
        ingredients: [
            "1/3 cup orange juice",
            "1 egg",
            "1 egg salad oil and add to dry",
            "Combine above and add to dry",
            "1 cup chopped walnuts",
            "1 cup raw cranberries halved"
        ],
        instructions: [
            "Mix and put in freezer. Serve as slush."
        ]
    },
    {
        id: 22,
        name: "Cranberry Orange Pull-aparts",
        category: "breads",
        tags: [],
        ingredients: [
            "12 Rhodes orange rolls - thawed",
            "but still cold or 24 dinner - thawed",
            "3/4 pkg non instant vanilla",
            "pudding",
            "1/4 cup dried cranberries",
            "1 orange rind grated",
            "1/2 cup butter melted"
        ],
        instructions: [
            "Mix 1 cup powdered sugar,",
            "1 Tbsp melted butter and",
            "2 Tbsp fresh Orange Juice",
            "Sprinkle remaining pudding over rolls.",
            "Pour melted butter over the top.",
            "Cover with plastic wrap and let rise until size doubles.",
            "Remove wrap and bake 350 degrees 30 - 35 min. Cover with foil last 15",
            "min of baking. Cool slightly and drizzle with cream frosting, if using.",
            "Let rise and bake at 350 degrees for 40 - 45 min."
        ]
    },
    {
        id: 23,
        name: "Dutch Babies with Fresh Fruit",
        category: "breads",
        tags: [],
        ingredients: [
            "Dutch Babies with Fresh Fruit",
            "1/4 cup orange juice/melted",
            "4 cup orange juice/melted",
            "1 3/4 orange juice/melted",
            "strawberries, nectarines,",
            "raspberries, blueberries"
        ],
        instructions: [
            "Place 1 tsp butter into each of 6-4 1/2 foil tart pans. Place pans in cold",
            "oven; turn on to preheat to 400 degrees. (Allow 10 min.)",
            "In medium bowl beat eggs with rotary beater and add flour, milk, oil and",
            "3. Remove pans from oven. Divide batter among pans. Bake for 15-20min",
            "4. In medium sauce pan melt margarine. Cool slightly and stir in fruit",
            "and lemon juice. After removing Dutch babies from oven, transfer to",
            "griddle at 350 degrees. Steam whole sack of Leese between towels."
        ]
    },
    {
        id: 24,
        name: "Flat Bread",
        category: "breads",
        tags: [],
        ingredients: [
            "2 Cups total cereal (crush after",
            "measuring)",
            "2 cups white flour",
            "2 cups white flour"
        ],
        instructions: [
            "Mix together dry ingredients",
            "Cut in butter and milk.",
            "Let stand for 1 hr.",
            "Divide dough into 4 parts and roll out paper thin.",
            "5. Bake at 350 degrees until slightly brown (about 7-8 min.)",
            "6. Bake at 350 degrees until slightly brown (about 7-8 min.)"
        ]
    },
    {
        id: 25,
        name: "French Toast",
        category: "breads",
        tags: [],
        ingredients: [
            "2 Eggs",
            "1/3 cup milk",
            "2 tsp cinnamon",
            "4 slices day old bread"
        ],
        instructions: [
            "Beat eggs, milk, cinnamon together. Add orange zest and whisk",
            "Dip each slice of bread into egg mixture.",
            "Melt butter in a large skillet and cook until golden brown."
        ]
    },
    {
        id: 26,
        name: "Pumpkin Roll",
        category: "breads",
        tags: [],
        ingredients: [
            "1/2 tsp ginger",
            "1/2 tsp salt",
            "1 cup flour",
            "4 eggs",
            "1 tsp baking powder"
        ],
        instructions: [
            "Spray large cookie sheet.",
            "Mix all ingredients until smooth.",
            "Place oven to 400 degrees and bake for 17 min or until brown",
            "Place on paper towel sprinkled with powdered sugar",
            "Cream 1 cup powdered sugar, 1 tsp vanilla, 8 oz cream cheese, 4 Tbsp",
            "butter. Mix until smooth"
        ]
    },
    {
        id: 27,
        name: "Lesse",
        category: "breads",
        tags: [],
        ingredients: [
            "8 cups mashed potatoes (5#)",
            "1/2 tsp salt",
            "1 2 cups potato water from",
            "1 Tbsp salt"
        ],
        instructions: [
            "Peel, quarter and pressure cook potatoes. (Use 2 cups of water and",
            "weight for 15+ - cook 8 minutes after 1st jiggle.",
            "Put potatoes through ricer and mash until blended well.",
            "Refrigerate overnight uncovered.",
            "5. In morning mix in flour, 1 cup at a time. Roll cut paper thin and bake on",
            "griddle at 350 degrees. Steam whole sack of Leese between towels."
        ]
    },
    {
        id: 28,
        name: "Oat Bran Muffins",
        category: "breads",
        tags: [],
        ingredients: [
            "1 Cup all purpose flour",
            "1 Cup oat bran",
            "1/4 Cup packed brown sugar",
            "1 4 Cup Olive Oil",
            "3 1 Cup buttermilk",
            "1 Cup raisins",
            "1/4 tsp ground cinnamon",
            "4 1 tsp ground cinnamon",
            "2 tsp baking powder"
        ],
        instructions: [
            "Preheat oven to 375 degrees",
            "Combine flour with other ingredients in 1st column. Stir well with whisk",
            "Combine milk, oil and egg whites and orange in blender until smooth.",
            "Add Oatards and raisins.",
            "Combine milk, chill and egg whites and orange in blender until smooth.",
            "Make well in middle of flour mixture. Stir until moist.",
            "Make well in middle of flour mixture. Stir until moist."
        ]
    },
    {
        id: 29,
        name: "Swedish Rye Bread",
        category: "breads",
        tags: ["swedish"],
        ingredients: [
            "1 pkg dry yeast",
            "2 cups brown sugar",
            "1/2 cup molasses",
            "1 tsp salt",
            "2 Tbsp shortening",
            "2 cups rye flour",
            "2 Tbsp orange rind"
        ],
        instructions: [
            "Mix yeast in 1/4 cup water",
            "In bowl combine brown sugar, molasses, salt and shortening,",
            "Add above mixture 1 1/2 cups medium rye flour. Mix well",
            "Cool to luke warm and stir in yeast and 2 Tbsp orange rind. Mix well",
            "Beat well and add softened yeast.",
            "Stir in 3-4 cups all purpose flour",
            "Let rise and bake at 375 degrees 25 - 35 min."
        ]
    },
    {
        id: 30,
        name: "Oatmeal Bread",
        category: "breads",
        tags: [],
        ingredients: [
            "1 1/2 cups warm water",
            "1/2 cup brown sugar",
            "1 tsp salt",
            "1/2 cup canola oil",
            "1 cup starter (See Bread Starter",
            "Recipe)"
        ],
        instructions: [
            "Place ingredients in first column in a large bowl and mix well. Dough",
            "should not be sticky.",
            "Add oatmeal to 2 cups of boiling water. Mix and let cool",
            "Add cooled oatmeal mixture to bowl, then add flour",
            "Dump on floured board, cover with towel and let rest for 10 min. lightly",
            "knead in remainder of flour until dough is elastic. Wash bowl and lightly",
            "oil inside.",
            "Remove from bowl and divide into 3 equal parts, place on floured board",
            "and knead 9 - 10 times. Place in pans greased with shortening. Brush",
            "tops lightly with oil, cover with wax paper then towel and let rise"
        ]
    },
    {
        id: 31,
        name: "Pancakes",
        category: "breads",
        tags: [],
        ingredients: [
            "6 Tbsp Sour Cream",
            "1 Cup Aunt Jemimah's Buttermilk",
            "complete",
            "little water",
            "lots of butter"
        ],
        instructions: [
            "Fry in lots of butter"
        ]
    },
    {
        id: 32,
        name: "Potato Pancakes",
        category: "breads",
        tags: [],
        ingredients: [
            "2 lg or 4 sm potatoes - cubed",
            "1/4 chopped onion",
            "2 beaten eggs",
            "1 tsp salt, pepper, baking pwdr",
            "2 Tbsp flour",
            "2 tbsp milk"
        ],
        instructions: [
            "Beat eggs in blender and add potatoes and onions to blender",
            "Add rest of ingredients",
            "Fry pancakes in oil"
        ]
    },
    {
        id: 33,
        name: "White/Whole Wheat Bread",
        category: "breads",
        tags: [],
        ingredients: [

        ],
        instructions: [
            "tops lightly with oil, cover with wax paper then towel and let rise",
            "overnight.",
            "Bake at 350 degrees for 25 min. Remove from oven and brush tops with",
            "butter an place on cooling racks. Makes 3 lg or 6 sm loaves."
        ]
    },
    {
        id: 34,
        name: "Carrot Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "4 eggs",
            "1 cup salad oil",
            "3 cups ground carrots",
            "1/2 cup chopped pecans"
        ],
        instructions: [
            "Mix together ingredients in 1st column.",
            "Add eggs, one at a time. Add salad oil.",
            "Fold in ground carrots and pecans.",
            "Bake 300 degrees for one hr.",
            "FROSTING: Blend 4 Tbsp soft margarine and 6 oz soft cream cheese",
            "Add 1 lb 3 cups powdered sugar and beat until smooth"
        ]
    },
    {
        id: 35,
        name: "German Chocolate Cake mix",
        category: "cake",
        tags: [],
        ingredients: [
            "1 German chocolate cake mix",
            "1/2 can low fat condensed milk",
            "8 oz cool whip"
        ],
        instructions: [
            "Bake cake as directed 10 min, poke with fork",
            "After cake has cooled over cake",
            "Pour condensed milk over cake",
            "Pour caramel sauce over cake",
            "Top with cool whip and heath bars"
        ]
    },
    {
        id: 36,
        name: "Chocolate Carmel Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "2-3 crushed heath bars",
            "1/2 jar caramel sauce"
        ],
        instructions: [
            "Bake cake as directed 10 min, poke with fork",
            "After cake has cooled over cake",
            "Pour condensed milk over cake",
            "Pour caramel sauce over cake",
            "Top with cool whip and heath bars"
        ]
    },
    {
        id: 37,
        name: "Coconut Crumb Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "6 eggs",
            "2 sticks butter - melted",
            "1/2 cup milk"
        ],
        instructions: [
            "Preheat oven to 325 degrees",
            "Grease and flour bundt pan with coconut, sugar and pecans in a bowl",
            "Crush wafers and whisk together eggs, butter and milk. Pour egg mix",
            "over dry ingredients and mix all",
            "Pour batter into pan",
            "Bake 1 hr 35 min",
            "Cool 10 min before turning over."
        ]
    },
    {
        id: 38,
        name: "Cranberry nut coffee cake",
        category: "cake",
        tags: [],
        ingredients: [
            "2 Tbsp sugar",
            "1 egg",
            "2/3 cup whole cranberry sauce",
            "2/3 cup whole cranberry sauce"
        ],
        instructions: [
            "Mix brown sugar, walnuts and cinnamon and set aside.",
            "Combine bisquick, sugar, egg and milk. After beating spread batter in",
            "greased 9 x 9 pan.",
            "Sprinkle batter with nut mixture.",
            "Spoon cranberry sauce over top.",
            "Bake 400 degrees for 20 - 25 min.",
            "Drizzle with powdered sugar frosting."
        ]
    },
    {
        id: 39,
        name: "Orange Bundt Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "1/2 cup chopped walnuts",
            "1 1/2 cup sour cream",
            "3 eggs"
        ],
        instructions: [
            "In small pan put 1/4 cup of orange cake mix",
            "Cut in butter. Stir in brown sugar and nuts. Set aside",
            "In large bowl blend remaining cake mix, eggs, and sour cream.",
            "Pour half the batter into greased and floured bundt pan. Sprinkle sugar",
            "mixture on top. Add remaining batter",
            "Bake 350 degrees for 60-65 min."
        ]
    },
    {
        id: 40,
        name: "Rhubarb Coffee Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "2 cups flour",
            "1 cup sugar",
            "3/4 tsp baking soda",
            "1 tsp cinnamon"
        ],
        instructions: [
            "Sift together ingredients in first column.",
            "Add ingredients in second column, beating w/elec beater for 2 min.",
            "Stir in 2 cups of finely cut rhubarb.",
            "Pour into greased and floured 9 x 13 pan and sprinkle with topping.",
            "TOPPING: 1/2 cup brown sugar 3/4 tsp cinnamon, 1/2 cup chopped",
            "nuts, 1/4 tsp nutmeg"
        ]
    },
    {
        id: 41,
        name: "Sour Cream Coffee Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "1 tsp baking soda",
            "2 eggs, shortening",
            "1/4 cup sour milk",
            "1/2 cup sour cream",
            "2 tsp vanilla",
            "1/2 cup chopped nuts",
            "1/2 cup chopped nuts"
        ],
        instructions: [
            "Cream sugar, eggs, shortening, butter and vanilla.",
            "Add dry ingredients, alternating with sour cream.",
            "Put half the doughnut grease angel food pan. Cover with topping",
            "Sprinkle with cinnamon and sugar.",
            "Bake 325 degrees for 60 min."
        ]
    },
    {
        id: 42,
        name: "Buttermilk Brownies",
        category: "candy",
        tags: [],
        ingredients: [
            "1 cup butter",
            "4 Tbsp cocoa",
            "1 cup water",
            "2 cups flour",
            "2 cups sugar",
            "1/2 cup buttermilk",
            "1 tsp soda",
            "2 eggs",
            "1 tsp vanilla"
        ],
        instructions: [
            "In a saucepan, bring to a boil butter, cocoa and water.",
            "Pour over mixture of flour and sugar. Mix well.",
            "Add buttermilk, soda, eggs and vanilla. Mix well.",
            "Pour into greased 10\" x 15\" pan.",
            "Bake at 400 degrees for 20 minutes.",
            "Frost while warm."
        ]
    },
    {
        id: 43,
        name: "Frosting for Brownies",
        category: "frosting",
        tags: [],
        ingredients: [
            "1/2 cup butter",
            "4 Tbsp cocoa",
            "1/3 cup buttermilk",
            "1 box powdered sugar",
            "1 tsp vanilla",
            "1 cup chopped nuts"
        ],
        instructions: [
            "Bring to a boil butter, cocoa and buttermilk.",
            "Add powdered sugar, vanilla and nuts.",
            "Beat well and spread on warm brownies."
        ]
    },
    {
        id: 44,
        name: "Chocolate Chip Cookies",
        category: "cookies",
        tags: [],
        ingredients: [
            "1 cup butter",
            "3/4 cup brown sugar",
            "1/4 cup white sugar",
            "1 egg",
            "1 tsp vanilla",
            "2 1/4 cups flour",
            "1 tsp soda",
            "1 tsp salt",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Cream butter and sugars.",
            "Add egg and vanilla.",
            "Mix in dry ingredients.",
            "Stir in chocolate chips.",
            "Drop by spoonfuls on ungreased cookie sheets.",
            "Bake at 375 degrees for 9-11 minutes."
        ]
    },
    {
        id: 45,
        name: "Sugar Cookies",
        category: "cookies",
        tags: [],
        ingredients: [
            "1 cup butter",
            "1 cup sugar",
            "1 egg",
            "1 tsp vanilla",
            "2 cups flour",
            "1/2 tsp baking powder",
            "1/4 tsp salt"
        ],
        instructions: [
            "Cream butter and sugar.",
            "Add egg and vanilla.",
            "Mix in dry ingredients.",
            "Roll into balls and flatten with fork.",
            "Bake at 350 degrees for 10-12 minutes."
        ]
    },
    {
        id: 46,
        name: "Snickerdoodles",
        category: "cookies",
        tags: [],
        ingredients: [
            "1 cup butter",
            "1 1/2 cups sugar",
            "2 eggs",
            "2 3/4 cups flour",
            "2 tsp cream of tartar",
            "1 tsp soda",
            "1/2 tsp salt",
            "2 Tbsp sugar",
            "2 tsp cinnamon"
        ],
        instructions: [
            "Cream butter and 1 1/2 cups sugar.",
            "Add eggs and beat well.",
            "Sift together flour, cream of tartar, soda and salt.",
            "Add to creamed mixture.",
            "Roll into balls and roll in mixture of 2 Tbsp sugar and cinnamon.",
            "Bake at 400 degrees for 8-10 minutes."
        ]
    },
    {
        id: 47,
        name: "Peanut Butter Cookies",
        category: "cookies",
        tags: [],
        ingredients: [
            "1 cup butter",
            "1 cup peanut butter",
            "1 cup brown sugar",
            "1 cup white sugar",
            "2 eggs",
            "3 cups flour",
            "2 tsp soda",
            "1/2 tsp salt"
        ],
        instructions: [
            "Cream butter, peanut butter and sugars.",
            "Add eggs and beat well.",
            "Mix in dry ingredients.",
            "Roll into balls and flatten with fork in crisscross pattern.",
            "Bake at 375 degrees for 10-12 minutes."
        ]
    },
    {
        id: 48,
        name: "Oatmeal Cookies",
        category: "cookies",
        tags: [],
        ingredients: [
            "1 cup butter",
            "1 cup brown sugar",
            "1/2 cup white sugar",
            "2 eggs",
            "1 tsp vanilla",
            "1 1/2 cups flour",
            "1 tsp soda",
            "1 tsp cinnamon",
            "1/2 tsp salt",
            "3 cups oatmeal"
        ],
        instructions: [
            "Cream butter and sugars.",
            "Add eggs and vanilla.",
            "Mix in dry ingredients.",
            "Stir in oatmeal.",
            "Drop by spoonfuls on ungreased cookie sheets.",
            "Bake at 350 degrees for 10-12 minutes."
        ]
    },
    {
        id: 49,
        name: "Chocolate Crinkles",
        category: "cookies",
        tags: [],
        ingredients: [
            "1/2 cup oil",
            "4 oz unsweetened chocolate",
            "2 cups sugar",
            "4 eggs",
            "2 tsp vanilla",
            "2 cups flour",
            "2 tsp baking powder",
            "1/2 tsp salt",
            "1 cup powdered sugar"
        ],
        instructions: [
            "Melt chocolate and mix with oil.",
            "Add sugar, eggs and vanilla.",
            "Mix in dry ingredients except powdered sugar.",
            "Chill dough 4 hours or overnight.",
            "Roll into balls and roll in powdered sugar.",
            "Bake at 350 degrees for 10-12 minutes."
        ]
    },
    {
        id: 50,
        name: "Molasses Cookies",
        category: "cookies",
        tags: [],
        ingredients: [
            "3/4 cup butter",
            "1 cup brown sugar",
            "1 egg",
            "1/4 cup molasses",
            "2 1/4 cups flour",
            "2 tsp soda",
            "1 tsp cinnamon",
            "1 tsp ginger",
            "1/2 tsp cloves",
            "1/2 tsp salt"
        ],
        instructions: [
            "Cream butter and brown sugar.",
            "Add egg and molasses.",
            "Mix in dry ingredients.",
            "Roll into balls and roll in sugar.",
            "Bake at 375 degrees for 8-10 minutes."
        ]
    },
    {
        id: 51,
        name: "Lemon Bars",
        category: "desserts",
        tags: [],
        ingredients: [
            "2 cups flour",
            "1/2 cup powdered sugar",
            "1 cup butter",
            "4 eggs",
            "2 cups sugar",
            "1/4 cup flour",
            "1/2 tsp baking powder",
            "1/4 cup lemon juice",
            "1 Tbsp lemon peel"
        ],
        instructions: [
            "Mix 2 cups flour, powdered sugar and butter.",
            "Press into 9\" x 13\" pan.",
            "Bake at 350 degrees for 20 minutes.",
            "Beat eggs and sugar.",
            "Add 1/4 cup flour, baking powder, lemon juice and peel.",
            "Pour over hot crust.",
            "Bake 25 minutes longer.",
            "Cool and dust with powdered sugar."
        ]
    },
    {
        id: 52,
        name: "Brownies",
        category: "desserts",
        tags: [],
        ingredients: [
            "1/2 cup butter",
            "1 cup sugar",
            "2 eggs",
            "1/2 cup flour",
            "1/4 cup cocoa",
            "1/4 tsp salt",
            "1/2 cup nuts"
        ],
        instructions: [
            "Cream butter and sugar.",
            "Add eggs and beat well.",
            "Mix in dry ingredients.",
            "Stir in nuts.",
            "Pour into greased 8\" square pan.",
            "Bake at 350 degrees for 30-35 minutes."
        ]
    },
    {
        id: 53,
        name: "Apple Crisp",
        category: "desserts",
        tags: [],
        ingredients: [
            "6 cups sliced apples",
            "1 cup sugar",
            "3/4 cup flour",
            "1/2 cup butter",
            "1 tsp cinnamon",
            "1/2 tsp salt"
        ],
        instructions: [
            "Place apples in greased baking dish.",
            "Mix remaining ingredients until crumbly.",
            "Sprinkle over apples.",
            "Bake at 375 degrees for 45 minutes.",
            "Serve warm with ice cream."
        ]
    },
    {
        id: 54,
        name: "Banana Pudding",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 box vanilla wafers",
            "6-8 bananas",
            "2 boxes instant vanilla pudding",
            "3 cups milk",
            "1 container Cool Whip"
        ],
        instructions: [
            "Prepare pudding with milk according to package directions.",
            "Layer wafers, bananas and pudding in dish.",
            "Repeat layers.",
            "Top with Cool Whip.",
            "Refrigerate until ready to serve."
        ]
    },
    {
        id: 55,
        name: "Peach Cobbler",
        category: "desserts",
        tags: [],
        ingredients: [
            "1/2 cup butter",
            "1 cup sugar",
            "1 cup flour",
            "1 cup milk",
            "1 tsp baking powder",
            "4 cups sliced peaches"
        ],
        instructions: [
            "Melt butter in baking dish.",
            "Mix sugar, flour, milk and baking powder.",
            "Pour over butter.",
            "Add peaches on top.",
            "Bake at 375 degrees for 45 minutes."
        ]
    },
    {
        id: 56,
        name: "Chocolate Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "2 cups sugar",
            "1 3/4 cups flour",
            "3/4 cup cocoa",
            "2 tsp soda",
            "1 tsp baking powder",
            "1 tsp salt",
            "2 eggs",
            "1 cup buttermilk",
            "1/2 cup oil",
            "1 cup hot coffee"
        ],
        instructions: [
            "Mix all dry ingredients.",
            "Add eggs, buttermilk and oil.",
            "Beat 2 minutes.",
            "Stir in hot coffee.",
            "Pour into greased pans.",
            "Bake at 350 degrees for 30-35 minutes."
        ]
    },
    {
        id: 57,
        name: "Yellow Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "2 1/4 cups flour",
            "1 1/3 cups sugar",
            "3 tsp baking powder",
            "1 tsp salt",
            "1/2 cup butter",
            "1 1/2 cups milk",
            "2 eggs"
        ],
        instructions: [
            "Mix all dry ingredients.",
            "Add butter, milk and eggs.",
            "Beat 2 minutes.",
            "Pour into greased pans.",
            "Bake at 350 degrees for 30-35 minutes."
        ]
    },
    {
        id: 58,
        name: "Pound Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "1 cup butter",
            "2 cups sugar",
            "5 eggs",
            "2 cups flour",
            "1/4 tsp salt",
            "1 tsp vanilla"
        ],
        instructions: [
            "Cream butter and sugar.",
            "Add eggs one at a time.",
            "Mix in flour, salt and vanilla.",
            "Pour into greased tube pan.",
            "Bake at 325 degrees for 1 hour and 20 minutes."
        ]
    },
    {
        id: 59,
        name: "Cherry Pie Supreme",
        category: "desserts",
        tags: [],
        ingredients: [
            "2 eggs",
            "1/2 tsp vanilla extract",
            "1 cup dairy sour cream"
        ],
        instructions: [
            "Preheat oven to 425 degrees",
            "Prepare pie shell; spread half of cherry pie filling in bottom; set rest of crust",
            "Place pie shell; spread and floured 9 x 13 pan at 350 degrees for 30 min",
            "Beat until crust is golden. Remove from oven",
            "Spread meringue on top of pie and till center w/remaining filling",
            "Cut 4th banana into slices dip in lemon juice; Garnish pie with slices"
        ]
    },
    {
        id: 60,
        name: "Cherry Cobbler",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 stick (1/2 cup) butter",
            "1 can (14.5 oz) tart pitted cherries",
            "1 cup flour"
        ],
        instructions: [
            "Preheat oven to 350 degrees for 30 min",
            "Melt butter in 8\" or 9\" square baking pan",
            "Drain cherries and reserve juice",
            "In a bowl, combine all remaining ingredients except vanilla and mix well",
            "Pour into melted butter but do not stir",
            "Add eggs 1 at a time and beat until smooth",
            "Add vanilla",
            "Spoon cherries on top of mixture",
            "Sprinkle with 1/2 cup reserved juice",
            "Bake at 350 degrees for 40 - 50 minutes until golden brown",
            "Serve hot with whipped topping"
        ]
    },
    {
        id: 61,
        name: "Hot Milk Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "2 cups flour",
            "2 tsp baking powder",
            "1/4 tsp salt",
            "1 tsp vanilla"
        ],
        instructions: [
            "Beat eggs well until light & foamy",
            "Add sugar gradually to eggs",
            "Heat milk and butter",
            "Mix in greased and floured 9 x 13 pan",
            "Bake in greased and floured 9 x 13 pan at 350 degrees for 30 min"
        ]
    },
    {
        id: 62,
        name: "Rhubarb Pie",
        category: "desserts",
        tags: [],
        ingredients: [
            "3 cups 1/2\" cut rhubarb",
            "1 1/3 cups sugar",
            "1/4 cup flour",
            "1 Tbsp butter"
        ],
        instructions: [
            "Mix and sprinkle evenly over bottom of 9 x 13 pan",
            "Cook at 350 degrees for 50 - 60 min"
        ]
    },
    {
        id: 63,
        name: "Chocolate Chiffon",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 envelope unflavored gelatin",
            "1/2 cup sugar",
            "1/4 tsp salt",
            "Meringue Pie Shell (See recipe)",
            "Chocolate curls for garnish"
        ],
        instructions: [
            "In saucepan mix gelatin, sugar, cocoa and salt. Stir in 1 cup milk",
            "Stir over medium heat until gelatin dissolves. Stir in vanilla",
            "Chill until mixture thickens when mixture to break up lumps. Add sweetened",
            "Chill",
            "Beat at high speed until mixture triples in bulk and fluffy. Add sweetened",
            "Garnish with chocolate curls"
        ]
    },
    {
        id: 64,
        name: "Hershey Bar Chocolate Pie",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 graham cracker crust",
            "1 (8oz) or 6 small Hershey bars",
            "3 Tbsp coffee",
            "8 oz cool whip",
            "Almonds"
        ],
        instructions: [
            "Melt (hershey) bars in coffee",
            "Add and stir in cool whip and almonds",
            "Pour into crust and refrigerate"
        ]
    },
    {
        id: 65,
        name: "Coconut Pie - Toasted",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 1/2 cups sugar",
            "1 1/2 cup margarine - melted",
            "1/2 oz can or - 1 1/3 cups",
            "1 unbaked 90 pastry shell",
            "4 tsp lemon juice"
        ],
        instructions: [
            "Combine eggs, sugar, margarine, lemon juice and vanilla. Stir in coconut",
            "Pour into unbaked pastry shell. Bake 350 degrees for 40-45 min",
            "Coconut will be serving",
            "Garnish with whipped cream and toasted coconut if desired"
        ]
    },
    {
        id: 66,
        name: "General Pecan-Cherry Pie - Frosted",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 15oz Refrigerated Pie Crust",
            "2 cups powdered sugar",
            "1 21 oz can cherry pie filling",
            "1 16 oz can whole berry cranberry sauce",
            "3 Tbsp cornstarch",
            "1/4 tsp cinnamon"
        ],
        instructions: [
            "Heat oven to 400 degrees. In large bowl, combine all filling ingredients",
            "except walnuts in top crust. Top with second crust, seal",
            "and mix well. Spoon into crust-lined pan. Top with crust",
            "edges and flute. Cut slits in top crust",
            "Cover edges with 2-3\" wide strips of foil",
            "After 15-20 min more. Measure 9\"",
            "Prepare pie crust as directed on package for",
            "one-crust filled pie using 9\" pie pan. Bake 450 degrees for 9-11",
            "minutes or until lightly browned. Cool"
        ]
    },
    {
        id: 67,
        name: "Key Lime Pie",
        category: "desserts",
        tags: [],
        ingredients: [
            "6 Meringue Pie egg whites, cream of tartar, sugar and salt in mixing bowl",
            "1 cup flour",
            "1 Tbsp water",
            "3 egg yolks"
        ],
        instructions: [
            "Mix first three ingredients like pie crust. Pat into 2 strips 8\" wide on",
            "cookie sheet. Spread over and 1/2 cup of water and 1/2 cup of butter until boiling then remove from",
            "heat. Add flour and stir. Until smooth. Add eggs 1 at a time and beat until",
            "smooth after each addition",
            "Add extract and then spread this mixture over pastry. Bake 45 min at",
            "375 degrees. Cool and Frost",
            "Cool and Frost"
        ]
    },
    {
        id: 68,
        name: "Kringle - Almond",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 cup flour",
            "1/2 cup butter",
            "1 Tbsp water",
            "3 egg yolks",
            "1/2 tsp almond extract"
        ],
        instructions: [
            "Mix first three ingredients like pie crust. Pat into 2 strips 8\" wide on",
            "cookie sheet of water and 1/2 cup of butter until boiling then remove from",
            "heat. Add flour and stir. Until smooth. Add eggs 1 at a time and beat until",
            "smooth after each addition",
            "Add extract and then spread this mixture over pastry. Bake 45 min at",
            "375 degrees. Cool and Frost"
        ]
    },
    {
        id: 69,
        name: "Lemon Meringue Pie",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 6oz can sweetened condensed milk",
            "1 tsp grated lemon rind",
            "1/4 tsp cream of tartar",
            "1/3 cup sugar",
            "1/3 cup lemon juice"
        ],
        instructions: [
            "Preheat oven to 350 degrees, stir in sweetened condensed milk",
            "In medium size and find. beat egg yolks; stir in sweetened condensed milk",
            "lemon juice and rind; beat egg yolks; find. beat egg whites with cream of tarter",
            "Turn into the crust. In small bowl beat egg whites with cream of tarter",
            "until soft peaks form; gradually beat egg yolks, beating until stiff",
            "Spread meringue on top of custard filling and bake 10 - 12 min or until",
            "meringue is golden brown, cool and chill"
        ]
    },
    {
        id: 70,
        name: "Lemon Pie - French",
        category: "desserts",
        tags: [],
        ingredients: [
            "4 eggs",
            "1 cup light corn syrup",
            "1 cup sugar",
            "1/8 tsp lemon juice",
            "2 Tbsp butter"
        ],
        instructions: [
            "In medium bowl, beat eggs well. add corn syrup, lemon peel, lemon",
            "juice and melted butter. Combine sugar and flour, stir into egg mixture.",
            "Pour into unbaked shell and bake 350 degrees for 50 min.",
            "Chill",
            "Serve with whip cream, spooned onto pie."
        ]
    },
    {
        id: 71,
        name: "Rhubarb Upside Down Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "4 cups finely cut rhubarb (if frozen and 1 Tbsp)",
            "2/3 cup white sugar",
            "2 oz cup brown sugar",
            "1 minute tapioca"
        ],
        instructions: [
            "Mix and sprinkle evenly over bottom of 9 x 13 pan",
            "Cook at 350 degrees for 50 - 60 min"
        ]
    },
    {
        id: 72,
        name: "Fruit Cake",
        category: "cake",
        tags: [],
        ingredients: [
            "2 cups sugar",
            "1 cup rhubarb",
            "3 eggs flour",
            "1 pkg dark raisins",
            "1/2 cup shortening",
            "1 cup walnuts",
            "3/4# mixed candied fruit",
            "1 pkg cut up dates"
        ],
        instructions: [
            "Combine ingredients in first column and boil for 10 min. Cool",
            "Mix ingredients in 2nd column and add to cooled mixture.",
            "Put a pan of water in the oven.",
            "Bake at 350 degrees for 1 hr 20 min.",
            "Decorate top with whole candied fruit and walnut halves."
        ]
    },
    {
        id: 73,
        name: "Peach Pie",
        category: "desserts",
        tags: [],
        ingredients: [
            "3 Tbsp cornstarch (2 if peaches are fresh instead of frozen)",
            "3 cups sliced peaches",
            "3 cups sugar/extra",
            "Mixture 1/2 water"
        ],
        instructions: [
            "Cook, pulp, sugar, water and cornstarch until thick and clear",
            "Add remaining canned peaches and cornstarch until thick and clear",
            "Arrange small blueberries over peaches and chill. Serve with whipped",
            "cream."
        ]
    },
    {
        id: 74,
        name: "Raspberries and Cream Snowflake Pie",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 14 oz can sweetened condensed milk (not evaporated)",
            "1/3 cup lemon juice",
            "1 16 oz pkg cream cheese",
            "1/8 tsp almond extract",
            "softened"
        ],
        instructions: [
            "Heat oven to 450 degrees. Prepare 1 crust as directed on package for",
            "one-crust baked shell using 9\" pie pan. Bake 450 degrees for 9-11",
            "minutes or until lightly browned. Cool",
            "Unfold remaining crust, ohm ungreased cookie sheet. Press out told",
            "lines. Cut crust into 1/2 diameter. Brush with melted butter Unfold",
            "slits in several places in top crust",
            "Cool",
            "Reserve 1/2 cup raspberry filling; spoon remaining filling in and over well"
        ]
    },
    {
        id: 75,
        name: "Strawberry Rhubarb Pie",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 pkg (8 oz) strawberry jello",
            "2 cups flour",
            "1/4 cup brown sugar",
            "1 cup chopped nuts (pecans)",
            "1 baked 9\" shell"
        ],
        instructions: [
            "Mix flour, sugar and margarine together and put crust over top. Refrigerate several hours",
            "Just before serving sprinkle with powdered sugar"
        ]
    },
    {
        id: 76,
        name: "Strawberry Dessert - Frosty",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 topping",
            "1/4 cup flour",
            "1/4 cup brown sugar",
            "1 cup chopped nuts (pecans)",
            "1/2 cup partially thawed berries (6 cups fresh)",
            "1/4 oz pkg chopped nuts (pecans)",
            "2 Tbsp lemon juice",
            "8 oz cool whip"
        ],
        instructions: [
            "Combine four, brown sugar, nuts and butter from 1st column and spread",
            "in 9 x 13 pan. Bake 350 degrees for 20 min. Remove and crumble up -",
            "bake 5 - 10 min more. Measure out 3 cup to sprinkle on top.",
            "Combine egg whites, sugar, berries and lemon juice from 2nd column.",
            "Beat at high speed for 10 min.",
            "Fold in Cool Whip and freeze overnight."
        ]
    },
    {
        id: 77,
        name: "White Chocolate Cranberry Pecan Tart",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 15 oz refrigerated pie crust",
            "1 15 oz cup light brown sugar",
            "3/4 cup light corn syrup",
            "1 cup pecan halves",
            "3 eggs"
        ],
        instructions: [
            "Place cookie sheet in middle oven rack. Heat oven to 400 degrees.",
            "Prepare pie crust for one crust filled pie using 10\" tart pan with removable",
            "bottom.",
            "Layer cranberries, pecans and white vanilla chips in crust-lined pan. In",
            "large bowl, beat egg. Add brown sugar, corn syrup, flour and orange",
            "peel; beat until well blended.",
            "Bake on cookie sheet at 400 for 35-45 min or until crust is",
            "golden brown and filling is set in center.",
            "Cool his or until completely cooled.",
            "Cover with spray coated foil after 25 min of baking.",
            "Serve with whipped cream - store in refrigerator."
        ]
    },
    {
        id: 78,
        name: "Strawberry Raspberry Peach Pie",
        category: "desserts",
        tags: [],
        ingredients: [
            "1 4# pkg fresh fruit",
            "2 cups fresh fruit",
            "1 baked 9\" shell"
        ],
        instructions: [
            "Melt marshmallows in milk in microwave 2-3 min",
            "Add cool, vanilla and salt",
            "Fold in fruit",
            "Pour into shell and refrigerate"
        ]
    },
    {
        id: 79,
        name: "California Avocado Dip",
        category: "dip",
        tags: [],
        ingredients: [
            "3 California avocados",
            "1/2 tsp salt lemon or lime juice",
            "1 tsp fresh lemon or lime juice",
            "1 1/3 tsp Worcestershire sauce",
            "1 clove crushed garlic"
        ],
        instructions: [
            "Peel, seed and mash blend avocados",
            "Peel, seed and finely chop tomatoes",
            "Combine all ingredients",
            "Cover and chill"
        ]
    },
    {
        id: 80,
        name: "Sourdough Vegetable Dip",
        category: "dip",
        tags: [],
        ingredients: [
            "1 lg round loaf sourdough bread",
            "Dip",
            "1 pkg frozen chopped spinach",
            "1 can water chestnuts - cut up",
            "3 chopped green onions"
        ],
        instructions: [
            "Cut off top of loaf and cut out inside of loaf.",
            "Tear into chunks and let sit overnight to dry out.",
            "Mix all ingredients for dip and refrigerate overnight",
            "Put dip inside hollow crust for serving."
        ]
    },
    {
        id: 81,
        name: "Shrimp Dip",
        category: "dip",
        tags: [],
        ingredients: [
            "1/2 cup ketchup",
            "1/2 cup Miracle Whip",
            "8 oz cream cheese (room temp)",
            "3/4 tsp lemon juice"
        ],
        instructions: [
            "Mix with electric beater until cream cheese is thoroughly mixed in and",
            "you don't see any white specs of cream cheese (strained)",
            "Add: Can of shrimp - tiny pieces (drained)",
            "Add: 1 1/4 - 1/2 cup chopped onion",
            "Serve with Frilly rye crackers. Bacon mini wheats, etc."
        ]
    },
    {
        id: 82,
        name: "Crab Quiche",
        category: "main dishes",
        tags: [],
        ingredients: [
            "4 pie crust",
            "2 cups light cream",
            "1/3 cup minced onion",
            "1 tsp salt",
            "1/8 tsp cayenne pepper"
        ],
        instructions: [
            "Preheat oven to 425 degrees.",
            "Line a 9\" pie pan with decrust.",
            "Beat eggs until blended.",
            "In a separate bowl, whisk milk and flour and then pour over chicken",
            "In a separate bowl, whisk milk and flour and then pour over chicken soup.",
            "Slowly pour over the flour and milk mixture.",
            "Bake uncovered at 400 degrees for 35 - 45 minutes (until top is golden",
            "brown).",
            "Let rest before serving."
        ]
    },
    {
        id: 83,
        name: "Calico Chili",
        category: "main dishes",
        tags: [],
        ingredients: [
            "8oz can garbanzo beans",
            "16oz can chili beans",
            "2 16oz cans stewed tomatoes",
            "1 6 oz can tomato paste",
            "1/4 cup hot taco sauce",
            "2 tsp chili powder"
        ],
        instructions: [
            "Fry together steak, onions, bacon and garlic until brown.",
            "Pour juice from one can of beans into meat, cover and simmer 1/2 hr.",
            "Add: remaining ingredients and simmer 1/2 hr."
        ]
    },
    {
        id: 84,
        name: "Chicken & Dumpling Casserole",
        category: "main dishes",
        tags: [],
        ingredients: [
            "3-4 cups cooked chicken",
            "1/4 cup butter",
            "1 cup self rising flour",
            "1 cup milk",
            "2 cups chicken broth"
        ],
        instructions: [
            "Preheat oven to 425 degrees.",
            "Line a 9\" pie pan with decrust.",
            "Shed the chicken and spread it on top of the butter.",
            "In a separate bowl, whisk milk and flour and then pour over chicken",
            "In a separate bowl, whisk chicken broth and cream of chicken soup.",
            "Slowly pour over the flour and milk mixture. (Do not stir)",
            "Bake uncovered at 400 degrees for 35 - 45 minutes (until top is golden",
            "brown).",
            "Let rest before serving."
        ]
    },
    {
        id: 85,
        name: "Chimichangas",
        category: "main dishes",
        tags: [],
        ingredients: [
            "1/2 tsp salt",
            "1/4 cup hamburger",
            "1 clove garlic - crushed",
            "1 can green chili",
            "1 tsp oregano",
            "3 flour tortillas"
        ],
        instructions: [
            "Brown salt and hamburger garlic cumin chili salsa, sour cream, vinegar",
            "Add 1 & cook 5 minutes; garlic cumin chili salsa, sour cream, vinegar",
            "Add and cook 15 minutes and 1/2 cup of meat, shredded cheese and refried",
            "beans.",
            "Fold envelope-style-fry if needed\"; put on cookie sheet and",
            "bake at 450 degrees for 15 min.",
            "Serve with Verde or enchilada sauce and top with lettuce, tomato, sour",
            "cream."
        ]
    },
    {
        id: 86,
        name: "Coconut - Pecan Frosting",
        category: "frosting",
        tags: [],
        ingredients: [
            "1 cup sugar",
            "1 cup brown sugar",
            "3 egg yolks",
            "1 cup butter",
            "1 tsp vanilla"
        ],
        instructions: [
            "Add and stir until medium heat until thickened (about 12 min)",
            "Reduce oven temp to 350 degrees",
            "Beat until of spreading consistency"
        ]
    },
    {
        id: 87,
        name: "Fudgy Brown Sugar Frosting",
        category: "frosting",
        tags: [],
        ingredients: [
            "2/3 cup brown sugar - packed",
            "1/2 cup light corn syrup",
            "2 egg whites",
            "1 1/8 tsp salt",
            "1/4 tsp cream of tartar"
        ],
        instructions: [
            "Combine all ingredients except vanilla",
            "Put on stove, heat at medium; beat at high speed for 3-4 minutes",
            "Turn off heat and beat until top and consistency",
            "Spread between layers and on top of cake. Garnish with walnuts",
            "For 9 & 13 pan use half recipe."
        ]
    },
    {
        id: 88,
        name: "Quick Chocolate Frosting",
        category: "frosting",
        tags: [],
        ingredients: [
            "1 1/2 cup sugar",
            "2 Tbsp shortening",
            "2 Tbsp cold milk",
            "7 Tbsp cold milk",
            "1 Tbsp corn syrup"
        ],
        instructions: [
            "Boil hard 1 min after mixture starts to boil. (Add a little powdered",
            "sugar if too thin)",
            "Cool and add 1 tsp vanilla, beat and spread on",
            "sugar (if too thin)",
            "Cover 9 x 13 cake."
        ]
    },
    {
        id: 89,
        name: "Sour Cream Dressing",
        category: "dressing",
        tags: [],
        ingredients: [
            "1/4 tsp dry mustard",
            "Dash of Cayenne",
            "Diced chives"
        ],
        instructions: [
            "Mix well and refrigerate"
        ]
    },
    {
        id: 90,
        name: "French Dressing",
        category: "dressing",
        tags: [],
        ingredients: [
            "1 can tomato soup",
            "1/2 cup sugar",
            "1/3 cup oil",
            "1/3 cup vinegar",
            "1/4 cup blue cheese"
        ],
        instructions: [
            "Mix and boil for 1 minute - cool",
            "Add blue cheese (crumbled) and refrigerate"
        ]
    },
    {
        id: 91,
        name: "Fruit Salad Dressing",
        category: "dressing",
        tags: [],
        ingredients: [
            "Rind and juice from one lemon",
            "1 cup sugar",
            "1 beaten egg"
        ],
        instructions: [
            "Combine juices, rind and sugar",
            "Heat and carefully add egg",
            "Cook until thick"
        ]
    },
    {
        id: 92,
        name: "Johnny's Dock Dressing",
        category: "dressing",
        tags: [],
        ingredients: [
            "1/2 tsp pepper",
            "Mandarin oranges",
            "rice noodles",
            "sliced almonds or",
            "dried cranberries",
            "Feta cheese"
        ],
        instructions: [
            "salt"
        ]
    },
    {
        id: 93,
        name: "Salad Oil Dressing",
        category: "dressing",
        tags: [],
        ingredients: [
            "3 Tbsp vinegar",
            "2 Tbsp oil",
            "2 Tbsp sugar",
            "salt and pepper to taste"
        ],
        instructions: [

        ]
    },
    {
        id: 94,
        name: "Fruit",
        category: "fruit",
        tags: [],
        ingredients: [
            "1/3 cup mint jelly",
            "1 Tbsp butter",
            "1 Tbsp lemon juice",
            "1 can 13 oz pineapple chunks"
        ],
        instructions: [
            "Cook and stir jelly, butter and lemon juice",
            "Stir in pears and pineapple. Heat thoroughly"
        ]
    },
    {
        id: 95,
        name: "Blueberries",
        category: "fruit",
        tags: [],
        ingredients: [
            "1/2 cup sugar",
            "2 cups blueberries"
        ],
        instructions: [

        ]
    },
    {
        id: 96,
        name: "Fruit - Pancake topping",
        category: "fruit",
        tags: [],
        ingredients: [
            "1 Tbs cornstarch",
            "1/2 cup sugar",
            "1 cup water",
            "1 cup blueberries"
        ],
        instructions: [
            "Mix sugar and cornstarch slowly. Add water while mixing",
            "Add berries",
            "Microwave high 3 min - stir",
            "Microwave high 3 min - stir",
            "Microwave high 2 min -stir"
        ]
    },
    {
        id: 97,
        name: "Cheesecake topping",
        category: "fruit",
        tags: [],
        ingredients: [
            "2 Tbs cornstarch",
            "1/2 cup water"
        ],
        instructions: [

        ]
    },
    {
        id: 98,
        name: "Strudel crust pie",
        category: "fruit",
        tags: [],
        ingredients: [
            "3 Tbsp cornstarch",
            "3/4 cup sugar",
            "3/4 cup water",
            "3 cups blueberries",
            "1 tsp lemon juice"
        ],
        instructions: [

        ]
    },
    {
        id: 99,
        name: "Honey Dijon Marinade",
        category: "marinade",
        tags: [],
        ingredients: [
            "1/2 cup honey",
            "1/4 cup Dijon mustard",
            "1/4 cup soy sauce",
            "2 tablespoons vegetable oil",
            "2 tablespoons white wine vinegar",
            "1 clove garlic, minced"
        ],
        instructions: [
            "Combine all ingredients in a bowl and whisk until well blended.",
            "Use as marinade for chicken, pork, or beef.",
            "Marinate meat for at least 30 minutes or overnight in refrigerator."
        ]
    },
    {
        id: 100,
        name: "Honey Dijon Cheese Dressing",
        category: "dressing",
        tags: [],
        ingredients: [
            "1/2 cup mayonnaise",
            "1/4 cup Dijon mustard",
            "2 tablespoons honey",
            "1/4 cup grated Parmesan cheese",
            "2 tablespoons white wine vinegar",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Whisk together mayonnaise, mustard, and honey.",
            "Add Parmesan cheese and vinegar, mix well.",
            "Season with salt and pepper.",
            "Chill before serving."
        ]
    },
    {
        id: 101,
        name: "Cranberry Pork Chops",
        category: "main dishes",
        tags: [],
        ingredients: [
            "6 pork chops, 3/4\" thick",
            "1/2 cup whole cranberry sauce",
            "2 tablespoons brown sugar",
            "2 tablespoons apple cider vinegar",
            "1 onion, pepper cut in 1/2\" pieces",
            "1/2 cup cornstarch",
            "1/2 cup boiling water",
            "2 tablespoons water"
        ],
        instructions: [
            "Trim fat from chops. Cook 10 minutes until you have 1 tablespoon fat. Use fat to brown chops using 1 tablespoon oil if needed.",
            "Brown chops using 1 tablespoon fat; season with salt and pepper.",
            "Drain drippings, reserving any browned bits. Add onion to chops with cranberry sauce.",
            "Dissolve bouillon cube in boiling water; add to chops along with brown sugar, vinegar. Cover and bake 1-1/2 hours at 325 degrees.",
            "Add pineapple and pepper; cover and cook 10 minutes more.",
            "Remove chops and add cornstarch and water mixture. Cook and stir until thick & bubbly. Pour over chops.",
            "Cool and stir until thick."
        ]
    },
    {
        id: 102,
        name: "Fruit Marinade",
        category: "marinade",
        tags: [],
        ingredients: [
            "1/2 cup orange juice",
            "1/4 cup lemon juice",
            "1/4 cup lime juice",
            "2 tablespoons honey",
            "1 tablespoon olive oil",
            "1 teaspoon dried thyme"
        ],
        instructions: [
            "Combine all ingredients in a bowl.",
            "Whisk until well blended.",
            "Use to marinate chicken or fish for 2-4 hours."
        ]
    },
    {
        id: 103,
        name: "Ranch Dressing",
        category: "dressing",
        tags: [],
        ingredients: [
            "1 cup mayonnaise",
            "1/2 cup sour cream",
            "1 packet ranch dressing mix",
            "1/2 cup buttermilk",
            "1 tablespoon lemon juice"
        ],
        instructions: [
            "Combine mayonnaise and sour cream.",
            "Add ranch dressing mix and whisk until smooth.",
            "Gradually add buttermilk and lemon juice.",
            "Refrigerate for at least 1 hour before serving."
        ]
    },
    {
        id: 104,
        name: "Onion Sauce",
        category: "sauce",
        tags: [],
        ingredients: [
            "2 large onions, sliced",
            "3 tablespoons butter",
            "2 tablespoons flour",
            "1 cup beef broth",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Sauté onions in butter until golden brown.",
            "Sprinkle with flour and cook 1 minute.",
            "Gradually add beef broth, stirring constantly.",
            "Cook until thickened. Season with salt and pepper."
        ]
    },
    {
        id: 105,
        name: "Pasta Salad",
        category: "salads",
        tags: [],
        ingredients: [
            "1 pound pasta, cooked and cooled",
            "1 cup cherry tomatoes, halved",
            "1/2 cup black olives",
            "1/2 cup Italian dressing",
            "1/4 cup Parmesan cheese",
            "1/4 cup fresh basil, chopped"
        ],
        instructions: [
            "Combine cooked pasta with tomatoes and olives.",
            "Add Italian dressing and toss well.",
            "Top with Parmesan cheese and fresh basil.",
            "Chill before serving."
        ]
    },
    {
        id: 106,
        name: "Saucy Chicken",
        category: "main dishes",
        tags: [],
        ingredients: [
            "4 chicken breasts",
            "1 can tomato sauce",
            "1/4 cup brown sugar",
            "2 tablespoons soy sauce",
            "1 tablespoon vinegar",
            "1 onion, chopped"
        ],
        instructions: [
            "Place chicken in baking dish.",
            "Combine remaining ingredients and pour over chicken.",
            "Bake at 350°F for 45 minutes or until chicken is done.",
            "Serve over rice."
        ]
    },
    {
        id: 107,
        name: "Breakfast Potatoes",
        category: "breakfast",
        tags: [],
        ingredients: [
            "4 medium potatoes, cubed",
            "2 tablespoons oil",
            "1 onion, diced",
            "1 bell pepper, diced",
            "Salt and pepper to taste",
            "Paprika to taste"
        ],
        instructions: [
            "Heat oil in large skillet.",
            "Add potatoes and cook until golden brown.",
            "Add onion and pepper, cook until tender.",
            "Season with salt, pepper, and paprika."
        ]
    },
    {
        id: 108,
        name: "Corn Pudding",
        category: "side dishes",
        tags: [],
        ingredients: [
            "1 can whole kernel corn, drained",
            "1 can cream-style corn",
            "1 box corn muffin mix",
            "1 cup sour cream",
            "1/2 cup butter, melted",
            "2 eggs"
        ],
        instructions: [
            "Preheat oven to 350°F.",
            "Mix all ingredients together.",
            "Pour into greased 9x13 pan.",
            "Bake 45-50 minutes until set and golden."
        ]
    },
    {
        id: 109,
        name: "Orange Brunch French Toast",
        category: "breads",
        tags: [],
        ingredients: [
            "8 slices bread",
            "6 eggs",
            "1 cup orange juice",
            "1/2 cup milk",
            "1/4 cup sugar",
            "1 teaspoon orange zest",
            "1/2 teaspoon vanilla"
        ],
        instructions: [
            "Beat eggs with orange juice, milk, sugar, orange zest and vanilla.",
            "Dip bread in mixture, coating both sides.",
            "Cook in buttered skillet until golden brown.",
            "Serve with orange syrup or powdered sugar."
        ]
    },
    {
        id: 110,
        name: "Teriyaki Pork Roast",
        category: "meat",
        tags: [],
        ingredients: [
            "3 lb boneless pork loin roast",
            "2 tbsp sugar",
            "2 tbsp soy sauce",
            "1 tbsp vinegar",
            "1 tsp ground ginger",
            "1/4 tsp garlic powder",
            "1/8 tsp pepper"
        ],
        instructions: [
            "Cover and cook 7-8 hours at 160 degrees."
        ]
    },
    {
        id: 111,
        name: "Lasagna Roll Ups",
        category: "pasta",
        tags: [],
        ingredients: [
            "6 microwave lasagna noodles",
            "10 oz pkg frozen chopped spinach",
            "1/2 cup chopped onion",
            "1/2 cup chopped mushrooms",
            "1 clove garlic, minced",
            "1/4 tsp nutmeg",
            "1/4 tsp italian seasoning",
            "1/4 cup parmesan cheese",
            "1/2 cup grated mozzarella cheese"
        ],
        instructions: [
            "Lay between damp dish towel for 8 hours or pre-cooked lasagna noodles.",
            "Mix all ingredients and add 1/6 of filling to each noodle. Place near end and roll up. Top with spaghetti sauce.",
            "Microwave 20 min @ 70% power.",
            "Add extra grated cheese on top and microwave 2 min until melted."
        ]
    },
    {
        id: 112,
        name: "Manicotti",
        category: "pasta",
        tags: [],
        ingredients: [
            "1 8oz pkg manicotti noodles",
            "2 tbsp olive oil",
            "1/2 cup small onion, finely chopped",
            "1/2 cup frozen chopped spinach, deveined",
            "1 10 oz pkg frozen chopped spinach, thawed, squeezed dry",
            "2 eggs, slightly beaten",
            "1 cup water",
            "1/2 tsp salt"
        ],
        instructions: [
            "Cook noodles according to directions. Drain and put in bowl of cold water.",
            "Heat oil in skillet over medium heat. Cook onion and garlic in butter - add spinach. Heat until moisture evaporates.",
            "Leave 1/3 cup meat mixture in casserole. Cover with single layer and put in noodles.",
            "Pour remainder of meat/cheese mixture on top w/ remaining sauce.",
            "Lay Manicotti in dish and top w/ remaining sauce."
        ]
    },
    {
        id: 113,
        name: "Microwave Manicotti",
        category: "pasta",
        tags: [],
        ingredients: [
            "2 tsp italian seasoning",
            "1 tsp garlic powder",
            "3 oz cream cheese mixture, 1/4 cup, 1 tbsp parsley",
            "2 eggs, lightly beaten",
            "1 cup water",
            "1/2 tsp salt"
        ],
        instructions: [
            "Brown sausage in fry pan, add break up sausage into glass 9 x 13 in.",
            "Add tomatoes (stewed), sauce and pasta coating, salt, pepper and cook 3 min.",
            "Heat oil in skillet, add seasoning salt and pasta mixture in casserole. Cover with single layer in bowl.",
            "Pour remainder of meat mixture in casserole w/ remaining sauce.",
            "Lay Manicotti dish and top w/ remaining sauce."
        ]
    },
    {
        id: 114,
        name: "Primavera with Shrimp",
        category: "pasta",
        tags: [],
        ingredients: [
            "1/2 cups baby carrots, peeled, sliced",
            "1/2 cup snap peas, 1/2 oz",
            "8 oz pkg snap peas",
            "1 tsp olive oil",
            "2 cloves minced garlic",
            "1/4 cup grated parmesan cheese"
        ],
        instructions: [
            "Bring 2 qts water to a boil. Add carrots and snap peas cooking until 3 min.",
            "Remove from water and add pasta, cooking to directions.",
            "Heat oil in skillet; over-heat, add pasta, salt and pepper and cook for 2 min. Add shrimp and wine evaporates.",
            "Add half and half and lemon juice. Reduce heat and simmer for 3 min.",
            "Toss mixture in bowl with pasta, arugula and parmesan cheese."
        ]
    },
    {
        id: 115,
        name: "Ricotta Filled Manicotti",
        category: "pasta",
        tags: [],
        ingredients: [
            "1/2 lb mozzarella cheese, diced",
            "2 eggs",
            "1/2 cup parmesan cheese"
        ],
        instructions: [
            "Season well with salt, pepper and parsley - mix thoroughly.",
            "Fill cooked manicotti shells - bake 350 degrees for 20 min."
        ]
    },
    {
        id: 116,
        name: "Frozen Fruit Salad",
        category: "salads",
        tags: [],
        ingredients: [
            "1 cup water",
            "2 frozen strawberries",
            "2 frozen blackberries",
            "1 can (30 oz) apricots, drain & cut"
        ],
        instructions: [
            "Boil sugar and water until clear and cool.",
            "Add remaining fruit and put in molds.",
            "Store in freezer."
        ]
    },
    {
        id: 117,
        name: "Fruit Salad",
        category: "salads",
        tags: [],
        ingredients: [
            "1 cup water",
            "2 cups seedless red grapes",
            "1 cup seedless green grapes",
            "2 tbsp lemon juice",
            "1 can crushed pineapple with juice"
        ],
        instructions: [
            "Wash apples and grapes. Chop apples into small cubes, leaving skin on.",
            "Place in medium bowl with lemon juice to prevent coating evenly.",
            "Add yogurt and nuts to fruit and mix."
        ]
    },
    {
        id: 118,
        name: "Orange Sherbet Jello",
        category: "salads",
        tags: [],
        ingredients: [
            "2 pkgs orange jello",
            "2 cups hot water",
            "1 pt orange sherbet",
            "1 (11 oz) can mandarin oranges"
        ],
        instructions: [
            "Mix jello and hot water until clear and cool.",
            "Add sherbet and stir until dissolved.",
            "Add oranges and chill until set."
        ]
    },
    {
        id: 119,
        name: "Potato Salad",
        category: "salads",
        tags: [],
        ingredients: [
            "6 potatoes",
            "3 hard boiled eggs",
            "1 medium tomato",
            "6 green onions",
            "1/2 cup mayonnaise"
        ],
        instructions: [
            "Boil and peel 6 potatoes, eggs, tomatoes, pickles and onions into desired size.",
            "Mix together and add mayonnaise and mustard.",
            "Garnish with egg slices."
        ]
    },
    {
        id: 120,
        name: "Cranberry Orange Salad",
        category: "salads",
        tags: [],
        ingredients: [
            "1 pkg orange flavored gelatin",
            "1/2 cup walnuts"
        ],
        instructions: [
            "Place orange gelatin and sugar in bowl.",
            "Add water and stir until dissolved.",
            "Let cool and then sit in evaporated milk, relish and walnuts.",
            "Store in freezer."
        ]
    },
    {
        id: 121,
        name: "Snow Jello",
        category: "salads",
        tags: [],
        ingredients: [
            "1/4 cup water",
            "1/4 cup milk",
            "1 pinch of salt",
            "8 oz cream cheese",
            "1/2 cup sugar"
        ],
        instructions: [
            "Heat water. 1/4 cup milk and gelatin. Stir until dissolved.",
            "In blender add 8 oz cream cheese, salt, gelatin mix, sugar, almond.",
            "Fold in Cool Whip.",
            "Chill until firm."
        ]
    },
    {
        id: 122,
        name: "Greek Pasta Salad",
        category: "salads",
        tags: [],
        ingredients: [
            "1/4 angel hair pasta",
            "1/2 cup olive oil",
            "2 tsp Greek seasoning",
            "4 1/2 tsp Greek seasoning",
            "4 1/2 tsp lemon or key lime juice",
            "1 bunch green onions, chopped"
        ],
        instructions: [
            "Boil pasta until tender.",
            "Mix all ingredients well and chill."
        ]
    },
    {
        id: 123,
        name: "Honey Chicken Salad",
        category: "salads",
        tags: [],
        ingredients: [
            "4 cups cooked chopped chicken",
            "1/3 cup honey",
            "1/4 tsp salt",
            "1/4 tsp pepper",
            "1/2 cups mayo"
        ],
        instructions: [
            "Mix dressing ingredients well and pour over chicken."
        ]
    },
    {
        id: 124,
        name: "Layered Salad",
        category: "salads",
        tags: [],
        ingredients: [
            "1# ground beef",
            "1 can (15 1/2 oz) black beans",
            "2 1/2 - 3 cups cheese",
            "2 cups sour cream",
            "1 can sliced water chestnuts",
            "1 pkg frozen peas (thawed)"
        ],
        instructions: [
            "Fry hamburger w/onions. Place in 13 casserole",
            "Add beans and salsa.",
            "Cover w/350 degrees oven until cheese melts",
            "Remove from oven and spread with sour cream",
            "Sprinkle olives, tomato, lettuce and avocado"
        ]
    },
    {
        id: 125,
        name: "Taffy Apple Salad",
        category: "salads",
        tags: [],
        ingredients: [
            "6x4x4 Granny Smith apples (4)",
            "8 oz crushed pineapple (save juice)",
            "8x2 cool whip",
            "1/2 cup sugar",
            "1 egg"
        ],
        instructions: [
            "Mix sugar & flour, add egg and then reserved pineapple juice & vinegar.",
            "Cook over low heat until thick. Cool.",
            "Put together just before serving.",
            "Pour this over diced apples, pineapple and peanut mix.",
            "Add cool whip and mix."
        ]
    },
    {
        id: 126,
        name: "Waldorf Salad",
        category: "salads",
        tags: [],
        ingredients: [
            "2 chopped apples (Gala)",
            "2 stalks chopped celery",
            "1/2 cup chopped pecans",
            "1/4 cup dark raisins",
            "1/4 cup mayo",
            "3 tbsp miracle whip"
        ],
        instructions: [
            "Mix and sprinkle with sugar."
        ]
    },
    {
        id: 127,
        name: "Ramen Noodle Cabbage Slaw",
        category: "salads",
        tags: [],
        ingredients: [
            "1 pkg cabbage/carrot slaw",
            "2 pkg beef Ramen noodles",
            "1 cup oil",
            "1/3 cup rice vinegar (Nakano)",
            "1/3 cup seasoning from noodle pkg",
            "2 pkg seasoning from noodle pkg"
        ],
        instructions: [
            "Put cabbage mix in large bowl",
            "Break up noodle mix with back of spoon",
            "Add Sauce and mix well"
        ]
    },
    {
        id: 128,
        name: "German Potato Salad",
        category: "salads",
        tags: [],
        ingredients: [
            "2 lbs flour - water to thin",
            "2 cans sliced potatoes",
            "4 hard boiled eggs",
            "1/2 tsp salt"
        ],
        instructions: [
            "Fry bacon and onion",
            "Mix sugar, water and vinegar. Combine with thinned flour and water well to eliminate any lumps.",
            "Cook into medium thick gravy",
            "Cook over medium heat, leave covered on and let sit 12 minutes.",
            "Remove from heat and hold under cold running water. Peel.",
            "Pour over sliced potatoes and eggs"
        ]
    },
    {
        id: 129,
        name: "French Dip Sandwiches",
        category: "sandwiches",
        tags: [],
        ingredients: [
            "1 can consomme soup",
            "1 can French onion soup",
            "1 large sliced onion",
            "1 large sliced green pepper",
            "3 - 4# roast (bottom round/rump or cross rib)"
        ],
        instructions: [
            "Add soup and beef to slow cooker with onion.",
            "Cut roast in pieces to fit in cooker with onion.",
            "Cover and cook on low 8 - 10 hrs.",
            "Shred meat with a fork.",
            "Serve on hoagie buns or ciabatta rolls with au jus"
        ]
    },
    {
        id: 130,
        name: "Pork Baby Back Ribs",
        category: "sauce",
        tags: [],
        ingredients: [
            "1 1/2 cups ketchup - packed",
            "6 tbsp brown sugar",
            "3 tbsp Worcestershire sauce"
        ],
        instructions: [
            "Brine Ribs for 12 hrs using Molasses Brine",
            "Preheat oven to 350 degrees",
            "Rinse and pat ribs dry (to remove salt and put ribs (cut in sections) in 9 inch oven pan, pour 1/3 over ribs, cover with onion.",
            "Leave 1 1/2 pan, cover drain, add corn salt and simmer for 45 min",
            "Cut brine and put ribs (cut in sections) in 9 inch oven."
        ]
    },
    {
        id: 131,
        name: "Barbecue",
        category: "sauce",
        tags: [],
        ingredients: [
            "1 3/4 cups water",
            "2 tbsp apple cider vinegar",
            "2 tbsp worcestershire sauce"
        ],
        instructions: [
            "Combine all ingredients in a zip lock bag, seal and shake until salt is dissolved.",
            "Put bag in bowl, add meat and seal pushing out all air.",
            "Massage liquid into ribs and marinate 12 hrs"
        ]
    },
    {
        id: 132,
        name: "Chili con Queso",
        category: "sauce",
        tags: [],
        ingredients: [
            "3/4# Colby cheese",
            "3/4# Monterey Jack cheese",
            "1 4 oz can tomatoes and green chili",
            "4 oz can diced green chili",
            "1/2 cup hot salsa"
        ],
        instructions: [
            "Mix together and beat in Crockpot. Dip with tortilla chips.",
            "Microwave 8 - 10 min at level 6, stirring occasionally"
        ]
    },
    {
        id: 133,
        name: "Chili Pure Sauce",
        category: "sauce",
        tags: [],
        ingredients: [
            "1 tsp salt",
            "1/4 tsp garlic powder",
            "1/4 tsp ground cumin",
            "1/2 tsp ground coriander seeds",
            "1/4 tsp ground coriander seeds",
            "2 cups chili pure"
        ],
        instructions: [
            "Brown meat and onion in fat",
            "Add chile powder and stir until foamy.",
            "Reduce heat and simmer for 15-20 min. (Add water if sauce becomes too thick.)",
            "Serve as sauce for enchiladas and frijoles; or posole, tacos and burritos; no meat is used in sauce."
        ]
    },
    {
        id: 134,
        name: "Butter/Huevos Rancheros Salsa",
        category: "sauce",
        tags: [],
        ingredients: [
            "1/2 tsp salt",
            "1 1/2 cups chicken stock",
            "2 cups chicken stock"
        ],
        instructions: [
            "Melt butter or margarine in frying pan. Add onion and cook until transparent",
            "Stir in flour and blend well.",
            "Add remaining ingredients. Cook until sauce is smooth and flavors are blended (20-30 min)"
        ]
    },
    {
        id: 135,
        name: "Green Chili Sauce",
        category: "sauce",
        tags: [],
        ingredients: [
            "2 tbsp oil or shortening",
            "1 small onion, chopped",
            "1 tbsp flour",
            "1 tsp salt",
            "1/8 tsp garlic powder",
            "1 cup cooked and chopped (pork, beef, chicken)",
            "9-12 green chilies",
            "1 cup chopped canned tomatoes",
            "3 cups liquid (may be all chicken broth) 2 cups chicken broth + 1 cup canned milk or 1 cup cream of chicken soup + 2 cups water"
        ],
        instructions: [
            "Cook onion in fat until soft; add flour and cook until foamy. Sauthe fresh pork or beef before adding onion.",
            "Add remaining ingredients and simmer 15-20 min. More flour may be added with water if sauce is too thin.",
            "Serve as enchilada sauce or as a bowl of chili."
        ]
    },
    {
        id: 136,
        name: "Spaghetti Sauce",
        category: "sauce",
        tags: [],
        ingredients: [
            "2 cloves of garlic - minced",
            "2 tbsp olive oil",
            "2 tbsp tomato paste",
            "3/4 tsp basil, parsley,oregano",
            "1/4 tsp salt",
            "1/4 tsp pepper",
            "6 oz can tomato paste"
        ],
        instructions: [
            "Sauté garlic in large saucepan until lightly browned. Add tomato paste, water, puree tomatoes and tomato sauce. Stir well.",
            "Add all seasonings to sauce.",
            "Add browned hamburger to sauce.",
            "Bring to boil, then simmer 1 hr."
        ]
    },
    {
        id: 137,
        name: "Verde Sauce",
        category: "sauce",
        tags: [],
        ingredients: [
            "20-30 tomatillos",
            "6 cloves garlic",
            "1/2 onion sliced",
            "3 raw jalapenos",
            "salt"
        ],
        instructions: [
            "Remove seeds from jalapenos",
            "Boil tomatillos in water with garlic, onion and jalapenos",
            "Let cool overnight",
            "Put in blender and blend until smooth. Salt to taste"
        ]
    },
    {
        id: 138,
        name: "Chicken w/Mango BBQ Sauce",
        category: "sauce",
        tags: [],
        ingredients: [
            "3 Tsp unsalted molasses",
            "2 Tbsp Worcestershire sauce",
            "1/4 cup tomato sauce",
            "1/4 cup fresh lime juice",
            "1 large sliced onion",
            "1 medium mango dice, diced",
            "3 dove, coarsely chopped garlic",
            "1 tsp salt",
            "Freshly ground black pepper",
            "1/2 tsp ground allspice",
            "1/3 cup red wine vinegar"
        ],
        instructions: [
            "Heat olive oil and add onion, cooking until translucent (3min).",
            "Add bell pepper, garlic, salt, black pepper and allspice stirring (2 min)",
            "Add remaining ingredients. Cook until sauce is smooth and flavors are well blended. (20-30 min)",
            "well blender. (20-30 min)"
        ]
    },
    {
        id: 139,
        name: "Fruit Salsa",
        category: "sauce",
        tags: [],
        ingredients: [
            "1 cup fresh strawberries",
            "1 cup Chopped cranberries",
            "1 cup Brown sugar jam",
            "2 oz orange juice"
        ],
        instructions: [
            "Mix all ingredients. If you use apples add more orange juice and use apple jelly"
        ]
    },
    {
        id: 140,
        name: "Lemon Cream Sauce for Pasta",
        category: "sauce",
        tags: [],
        ingredients: [
            "2 tbsp butter",
            "2 cloves garlic",
            "2/3 cup heavy cream",
            "1/8 cup lemon juice",
            "1/2 oz parmesan cheese grated",
            "1/2 tbsp grated lemon rind",
            "2 tbsp fresh chives, minced",
            "1 tbsp italian parsley, chopped",
            "salt & pepper to taste"
        ],
        instructions: [
            "Melt butter in sauté pan over medium heat",
            "Add garlic and cook for 1 min",
            "Stir in cream, lemon juice, parmesan cheese, lemon rind and chives",
            "Bring to a simmer and cook for 2 min.",
            "Add parsley, salt and pepper and cook for 1 min."
        ]
    },
    {
        id: 141,
        name: "Cranberry Relish",
        category: "relish",
        tags: [],
        ingredients: [
            "2 12 oz pkgs fresh cranberries",
            "2 red apples",
            "3 oranges",
            "1 3/4 cup sugar"
        ],
        instructions: [
            "Peel oranges, core and cut up apples",
            "Wash cranberries and then grind cranberries, apples and oranges in food mill.",
            "Add sugar and mix all ingredients together. Let sit overnight in refrigerator."
        ]
    },
    {
        id: 142,
        name: "Shrimp",
        category: "seafood",
        tags: [],
        ingredients: [
            "1/2 oz can shrimp peeled",
            "1/2 cup shrimp broth",
            "12 cup pasta sauce",
            "3/4 tsp basil, parsley,oregano"
        ],
        instructions: [
            "Place shrimp with soft shell peeled and season well with spices and seasoning with the right heat, leaving fish wet. Add pasta, shrimp and vegetables and cheese in fridge"
        ]
    },
    {
        id: 143,
        name: "French Onion Soup",
        category: "soup",
        tags: [],
        ingredients: [
            "1 lg white sweet onion",
            "2 tbsp butter",
            "1 (10 3/4 oz) onion soup",
            "2 shakes Worcestershire sauce",
            "1 can water"
        ],
        instructions: [
            "Brown onion in butter",
            "Add bouillon, worcestershire sauce, and water.",
            "Heat and mix well."
        ]
    },
    {
        id: 144,
        name: "Cheese Soup",
        category: "soup",
        tags: [],
        ingredients: [
            "2 cans cream of chicken or cream",
            "2 cans cheese soup",
            "1# american cheese(3/4 lb)",
            "1/4 cup sharp cheddar",
            "1/4 cup ham",
            "1 cup ham"
        ],
        instructions: [
            "Cook vegetables in water and bouillon until tender.",
            "Add cubed cheese and ham just before serving."
        ]
    },
    {
        id: 145,
        name: "Beef & Mushrooms",
        category: "sauce",
        tags: [],
        ingredients: [
            "1 6 oz can sliced drained",
            "1 pt fresh sliced mushrooms or 1 pt fresh sliced",
            "2 tbsp butter"
        ],
        instructions: [
            "Melt butter or margarine in skillet, add mushrooms stirring occasionally",
            "Season with salt and pepper."
        ]
    },
    {
        id: 146,
        name: "Swedish Fruit Soup",
        category: "fruit",
        tags: ["swedish"],
        ingredients: [
            "1 pkg (11 oz) mixed dried fruits",
            "6-1/2 cups water",
            "1/2 cup sugar",
            "2 Tbsp quick-cooking tapioca",
            "1/4 tsp salt"
        ],
        instructions: [
            "Bring to a boiling; simmer uncovered until fruit is tender, about 30 min.",
            "Add remaining ingredients. Bring to a boil; cover, cook over low heat 15 min longer, stirring occasionally. Remove stick cinnamon.",
            "Serve warm or chilled."
        ]
    },
    {
        id: 147,
        name: "Creamed Asparagus",
        category: "vegetables",
        tags: [],
        ingredients: [
            "2 lbs asparagus",
            "1/2 tsp pepper",
            "1 cup milk"
        ],
        instructions: [
            "Melt butter over low heat in a heavy sauce pan.",
            "Blend in flour and seasonings over low heat. Stir until mixture is smooth and bubbly. Bubble for about 1 min.",
            "Remove from heat and stir in milk. Bring to a boil stirring constantly."
        ]
    },
    {
        id: 148,
        name: "Oriental Asparagus",
        category: "vegetables",
        tags: [],
        ingredients: [
            "2 # fresh asparagus trimmed",
            "1/2 cup chopped toasted pecans",
            "1/2 cup chopped green onions",
            "1/4 cup soy sauce",
            "2 Tbsp vegetable oil",
            "2 tsp sugar"
        ],
        instructions: [
            "Bring saucepan of water to boil, and cook asparagus until tender but crisp.",
            "Drain and briefly immerse in cold water. In a large resealable plastic bag, combine mixed fruits, raisins, cinnamon and water.",
            "Seal the bag and marinate for 24 hours in the refrigerator, turning half way through. To serve, sprinkle nuts and onions on the asparagus mix."
        ]
    },
    {
        id: 149,
        name: "Baked Asparagus",
        category: "vegetables",
        tags: [],
        ingredients: [
            "1 cup orange juice",
            "1 cup orange sauce",
            "1 Tbsp balsamic vinegar",
            "1/2 tsp rose water",
            "Zest of 1 orange"
        ],
        instructions: [
            "Preheat oven to 350 degrees.",
            "Toss asparagus in olive oil; place in foil-sided pan in single layer.",
            "Sprinkle with salt and pepper. Bake 10-12 min-fork pierce easily.",
            "Bring orange juice to a boil; cook until it is 3/4 of volume easily."
        ]
    },
    {
        id: 150,
        name: "Green Bean Casserole",
        category: "vegetables",
        tags: [],
        ingredients: [
            "2 cans green beans, drained",
            "1 can cream of mushroom soup",
            "1/2 cup milk",
            "1 cup French fried onions"
        ],
        instructions: [
            "Mix beans, soup, milk and 1/2 cup onions.",
            "Pour into 1 1/2 quart casserole.",
            "Bake at 350°F for 25 minutes.",
            "Top with remaining onions; bake 5 minutes more."
        ]
    }
];