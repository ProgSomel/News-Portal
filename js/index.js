const loadData = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json();
    const newsCategories = data.data.news_category
    loadFunctionCategories(newsCategories);
    
    
    
}
const loadFunctionCategories = (newsCategories) => {
    const newsHeadingContainer = document.getElementById("newsHeadingContainer");
    newsHeadingContainer.innerHTML = `
    <ul class="flex flex-col lg:flex-row gap-5">
      <li>Home</li>
      ${newsCategories.map(category => `
        <li onclick="loadNews('${category.category_id}')" class="hover:text-[#5D5FEF] hover:bg-[#EEEFFF] px-2 cursor-pointer">${category.category_name}</li>
      `).join("")}
    </ul>
  `;
    
}

//! handle sepcific news 
const loadNews = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const data = await res.json();
    const news = data.data;
    console.log(data.data[0].rating );
    showNews(news);
}

//! show news 
const showNews = (news) => {
    const newsContainer = document.getElementById("newsContainer");
    newsContainer.textContent = "";
    news.forEach((newsItem) => {
        const div = document.createElement("div");
        div.classList = "flex flex-col lg:flex-row rounded-lg  shadow-sm my-4 bg-[#FFF]";

        div.innerHTML = `
        <figure class="flex-1/4 p-4 w-full rounded-lg"><img class="  h-full rounded-lg " src=${newsItem?.image_url} alt="Movie"/></figure>
        <div class="flex-3/4 card-body">
          <h2 class="card-title">${newsItem.title}</h2>
          <p>There’s no better time than now to familiarise yourself with the best online vintage clothing stores. If you want to overhaul your wardrobe for the long run, mixing vintage with high street clothing is the key to being trendy as well as sustainable.

          But vintage shopping isn’t easy, you can easily spend hours in a store and walk out with...</p>

          <div class="flex flex-col lg:flex-row items-center gap-4 lg:gap-32 mt-4">
                <div class="flex  items-center gap-2">
                    <div flex-1><img class="w-[40px] h-[40px] rounded-full" src=${newsItem.author.img} alt="" /></div>
                    <div class="flex-1">
                        <h2 class="font-bold whitespace-nowrap">${newsItem.author.name}</h2>
                        <p class="font-light  ">${newsItem.author.published_date}</p>
                    </div>
                </div>

                <div class="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M23.8717 11.745C22.9896 9.46324 21.4582 7.48996 19.4668 6.06906C17.4754 4.64817 15.1113 3.84193 12.6667 3.75C10.2221 3.84193 7.85798 4.64817 5.86659 6.06906C3.8752 7.48996 2.34381 9.46324 1.46169 11.745C1.40211 11.9098 1.40211 12.0902 1.46169 12.255C2.34381 14.5368 3.8752 16.51 5.86659 17.9309C7.85798 19.3518 10.2221 20.1581 12.6667 20.25C15.1113 20.1581 17.4754 19.3518 19.4668 17.9309C21.4582 16.51 22.9896 14.5368 23.8717 12.255C23.9313 12.0902 23.9313 11.9098 23.8717 11.745ZM12.6667 18.75C8.69169 18.75 4.49169 15.8025 2.96919 12C4.49169 8.1975 8.69169 5.25 12.6667 5.25C16.6417 5.25 20.8417 8.1975 22.3642 12C20.8417 15.8025 16.6417 18.75 12.6667 18.75Z" fill="#515151"/>
                <path d="M12.6667 7.5C11.7767 7.5 10.9066 7.76392 10.1666 8.25839C9.4266 8.75285 8.84982 9.45566 8.50923 10.2779C8.16864 11.1002 8.07952 12.005 8.25315 12.8779C8.42679 13.7508 8.85537 14.5526 9.48471 15.182C10.114 15.8113 10.9159 16.2399 11.7888 16.4135C12.6617 16.5872 13.5665 16.4981 14.3888 16.1575C15.211 15.8169 15.9138 15.2401 16.4083 14.5001C16.9028 13.76 17.1667 12.89 17.1667 12C17.1667 10.8065 16.6926 9.66193 15.8487 8.81802C15.0048 7.97411 13.8602 7.5 12.6667 7.5ZM12.6667 15C12.0733 15 11.4933 14.8241 11 14.4944C10.5066 14.1648 10.1221 13.6962 9.89505 13.148C9.66799 12.5999 9.60858 11.9967 9.72433 11.4147C9.84009 10.8328 10.1258 10.2982 10.5454 9.87868C10.9649 9.45912 11.4995 9.1734 12.0814 9.05764C12.6634 8.94189 13.2666 9.0013 13.8147 9.22836C14.3629 9.45542 14.8315 9.83994 15.1611 10.3333C15.4907 10.8266 15.6667 11.4067 15.6667 12C15.6667 12.7956 15.3506 13.5587 14.788 14.1213C14.2254 14.6839 13.4623 15 12.6667 15Z" fill="#515151"/>
              </svg>

              ${newsItem.total_view?newsItem.total_view:"No Views"}
              
              </div>
              <div>
            <p>${newsItem.rating.number}</p>
          </div>

          <div class="">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 20C10.0001 19.6685 10.1318 19.3505 10.3662 19.1161C10.6006 18.8817 10.9185 18.75 11.2501 18.75H25.7326L20.3651 13.385C20.1303 13.1503 19.9985 12.8319 19.9985 12.5C19.9985 12.1681 20.1303 11.8497 20.3651 11.615C20.5998 11.3803 20.9181 11.2484 21.2501 11.2484C21.582 11.2484 21.9003 11.3803 22.1351 11.615L29.6351 19.115C29.7515 19.2311 29.8438 19.369 29.9068 19.5209C29.9699 19.6728 30.0023 19.8356 30.0023 20C30.0023 20.1644 29.9699 20.3272 29.9068 20.4791C29.8438 20.6309 29.7515 20.7689 29.6351 20.885L22.1351 28.385C21.9003 28.6197 21.582 28.7516 21.2501 28.7516C20.9181 28.7516 20.5998 28.6197 20.3651 28.385C20.1303 28.1503 19.9985 27.8319 19.9985 27.5C19.9985 27.1681 20.1303 26.8497 20.3651 26.615L25.7326 21.25H11.2501C10.9185 21.25 10.6006 21.1183 10.3662 20.8839C10.1318 20.6495 10.0001 20.3315 10.0001 20Z" fill="#5D5FEF"/>
        </svg>
          </div>
          </div>

          

         
        `
        newsContainer.appendChild(div);

    })
}

loadData();
loadNews("01");

