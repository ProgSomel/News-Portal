const handleCategory = async() => {
    
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');
    data.data.news_category.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `<a class="tab">Tab 1</a> `
        tabContainer.appendChild(div);
    })
    
    console.log(data.data.news_category);
}
handleCategory();
