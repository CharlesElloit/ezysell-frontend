const toJson = response => response.json();

const urlToFetch = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes`;

fetch(urlToFetch)
  .then(toJson)
  .then(json => {
    this.setState(() => {
      return {
        data: json
      };
    });
    return json;
  })
  .then(json => {
    console.log(json);
    const promises = json.meals.map(obj => {
      let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${obj.id}/information`;
      let req = new Request(url, {
        method: "GET",
        headers: header
      });
      return fetch(req)
        .then(toJson)
        .then(json => {
          console.log(json);
          this.setState(prevState => ({
            recipe: prevState.recipe.push(json)
          }));
        });
    });
    return Promise.all(promises);
  })
  .then(() => {
    console.log("All done successfully!");
  });
