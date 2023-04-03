<template >
    <div>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="@/assets/bestseller1.png" class="d-block w-100" alt="...">
            <p class="slider_txt"><b>The "Thundering Cascade" painted by Ashneer Grover in 2021.</b><br>
            "Thundering Cascade" is a captivating painting that depicts a powerful waterfall in a lush, green forest. The painting was created by the contemporary artist Ashneer Grover, who is known for his realistic and immersive nature scenes.</p>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="@/assets/bestseller2.png" class="d-block w-100" alt="...">
            <p class="slider_txt"><b>The "Reflections of Serenity" painted by Om Kulkarni in 2022.</b><br>
              "Reflections of Serenity" is a beautiful painting that captures the peacefulness and tranquility of nature. The painting depicts a tree standing at the edge of a calm body of water, with its reflection shimmering in the gentle ripples of the water.</p>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="@/assets/bestseller3.png" class="d-block w-100" alt="...">
            <p class="slider_txt"><b>The "Rural Serenity" painted by Kiran Deshpande in 2021.</b><br>
              "Rural Serenity" is a picturesque painting that depicts a charming village nestled in the countryside. Created by the contemporary artist David Lee, the painting captures the essence of rural life with its peaceful and idyllic setting.</p>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
</template>

<style scoped>
#carouselExampleInterval
{
  transform: scale(0.8);
  
}

.carousel-item img
{
  border-radius: 40px;
}

.slider_txt
{
  padding: 20px;
  padding-top: 10px;
  margin-top: 20px;
  font-size: 20px;
}
div img
{
    height: 500px;
    width: 500px;
}
</style>