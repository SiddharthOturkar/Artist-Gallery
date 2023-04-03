<template>
    <div>
        <HeaderFile1/>
        <div class="container"> 
          <div class="verticle1">
            <div class="abouthd">
            <img class="homedecor homedecor1" src="@/assets/art1.jpg" alt="image 1">
            <img class="homedecor homedecor2" src="@/assets/art3.jpg" alt="image 2">
            <img class="homedecor homedecor3" src="@/assets/art7.jpg" alt="image 3">
            <img class="homedecor homedecor4" src="@/assets/art10.jpg" alt="image 4">
            <img class="homedecor homedecor5" src="@/assets/art6.jpg" alt="image 5">
            <img class="homedecor homedecor6" src="@/assets/art8.jpg" alt="image 6">
          </div>
        </div>
          <div class="verticle2">
            <h1 id="about">About us</h1><br>
            <p id="para">Artist Gallery is the website that serves as a platform for artists in our local community to showcase and sell their art to buyers who are interested in supporting local talent. By promoting local art, our website aims to strengthen the local creative community and encourage people to buy from and support local businesses. <br> 
            Someone has said it correct, <br>
             <b><i>"A website is an essential tool for artists and galleries to showcase their work, connect with potential buyers, and build a strong online presence. With a well-designed website, artists and galleries can reach a wider audience, establish credibility in their industry, and make it easy for buyers to browse and purchase their art from anywhere in the world." - Unknown </i> </b>
            </p>
          </div>
        </div>
        <FooterFile/>


    </div>



</template>

<script>
import HeaderFile1 from '@/components/HeaderFile1.vue';
import FooterFile from '@/components/FooterFile';
export default
{
    components:
    {
        FooterFile,
        HeaderFile1
    },
}

</script>

<style scoped> 
.container {
  height: 680px;
  width: 1000px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 3rem;
  margin-top: 50px;
}
.verticle1{
  height: 680px;
  flex-basis: 600px;
}

.verticle2{
  padding-top: 10px;
  height: 400px;
  flex-basis: 400px;
  text-align: justify;
  padding-right: 15px;
  font-size: 15px;
}

.verticle2{
  height: 680px;
}
.abouthd {
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 1rem; 
  transition: ease-in-out 2s;
}
.homedecor {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; 
  transition: ease-in 2s;
}
.homedecor1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.homedecor2 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
}
.homedecor3 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 6;
}
.homedecor4 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 6;
}
.homedecor5 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 9;
}
.homedecor6 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
}
#about{
  font-size: 45px;

}
#para{
  font-size: 15px;
}


</style>