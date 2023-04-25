<template>
    <div>
        <HeaderFile1/>
        <div class="history_txt">
                        Art History
                </div>
        <div class="history">
            <div class="history_img">
                <img src="@/assets/History_main_img.jpg" alt="">
            </div>
                <img src="@/assets/History_main_img1.jpg" class="img1" alt="">
        </div>

        <!---------------------- History Cards Starts from Here ---------------------- -->
            <div class="History_cards">
                <!-- <div class="history_txt">
                        Art History
                </div> -->
                <div class="History_wrapper">
                    <div class="card" style="width: 40rem; height: 50rem;">
                        <div class="card-body">
                            <h5 class="card-title">pigs in ochre</h5><hr>
                            <p class="card-text">The oldest known cave paintings date back to around 40,000 years ago,and were found in caves in Spain and Indonesia. </p>
                            <img src="@/assets/pigs.jpg" style="height: 200px; width: 230px; border-radius: 20px;" alt=""><hr>
                            <br> <a href="https://en.wikipedia.org/wiki/Cave_painting" target="_blank" class="btn btn-primary">Know More</a>
                        </div>
                    </div>

                    <div class="card" style="width: 40rem;">
                        <div class="card-body">
                            <h5 class="card-title">Mona Lisa Painting</h5><hr>
                            <p class="card-text">The Mona Lisa, painted by Leonardo da Vinci in the early 16th century, is widely considered to be the most famous painting in the world.</p>
                            <img src="@/assets/monalisa.jpg" style="height: 200px; width: 180px; border-radius: 20px;" alt=""><hr>
                           <br> <a href="https://en.wikipedia.org/wiki/Mona_Lisa" target="_blank" class="btn btn-primary">Know More</a>
                        </div>
                    </div>

                    <div class="card" style="width: 40rem;">
                        <div class="card-body">
                            <h5 class="card-title">Greeks and Romans</h5><hr>
                            <p class="card-text">The ancient Greeks and Romans were known for their realistic, lifelike sculptures, which were often based on idealized forms of the human body.</p>
                            <img src="@/assets/greeks.png" style="height: 200px; width: 270px; border-radius: 20px;" alt=""> <hr>
                            <br> <a href="https://en.wikipedia.org/wiki/Roman_sculpture" target="_blank" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
            </div>

    <!-- -------------------- Upload Now Heading -------------- -->

            
            <div class="upload">
                <div class="history_txt">
                    Let's Create History ! Publish your Painting now 
                </div>
                <p>If you're an artist looking for a platform to showcase your work, look no further than our website! Our platform provides a unique opportunity to share your creations with a global audience. By uploading your art to our website, you can gain exposure, connect with like-minded individuals, and potentially even secure future opportunities. Whether you're a seasoned professional or an emerging talent, we welcome artists of all skill levels and backgrounds to join our community. So why wait? Start sharing your art with the world and unlock your full creative potential with our platform today!</p>
            </div>
    
    
        <FooterFile/>
    </div>
</template>

<script>
import HeaderFile1 from '@/components/HeaderFile1.vue';
// import SliderFile from '@/components/SliderFile';
import FooterFile from '@/components/FooterFile';
export default
{
    components:
    {
        // SliderFile,
        FooterFile,
        HeaderFile1
    }
}
</script>

<style >

.history
{
    display: flex;
    flex-direction: row;
    padding-top: 30px;

    /* border: 2px solid red; */
}

.history .img1
{
    /* margin-left: 20px; */
    /* border: 2px solid pink; */
   /* transform: scale(0.5); */
   height: 339px;
   width: 900px;
    
}

.history_txt
{
    font-size:5rem;
/* text-decoration: 1px solid underline; */
padding-top: 10px;

}

/* -------------- History Cards Starts from here --------------------- */
.History_cards
{
    margin-top: 100px;
}
.History_wrapper
{
    display: grid;
    grid-template-columns: 400px 400px 400px;
    gap: 20px;
    justify-content: center;
}

.History_wrapper .card
{
    border: 0.5px solid #395f72;
    background-color: rgb(251, 248, 240);
    /* border-radius: 30px; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.History_wrapper .card:hover
{
    background-color: rgb(241, 235, 219);
}

.History_wrapper .card .card-title 
{
    /* border: 2px solid pink; */
    color: #395f72;
    font-weight: bold;
    padding: 10px;
    font-size: 20px;
}

.History_wrapper .card .card-text
{
    color: #395f72;
    /* font-weight: bold; */
    padding: 5px;
    font-size: 20px;
}

.History_wrapper .card a
{
    background-color: #395f72;
    border-radius: 20px;
    border: none;
    transition: 0.5s;
}
.History_wrapper .card a:hover
{
    transform: scale(1.1);
}

/* ----------- UploadNow -------------------- */
.upload
{
    margin: 40px;
    margin-top: 60px;
}

.upload p
{
    /* border: 2px dotted red; */
    margin: 20px;
    padding-left: 40px;
    padding-right: 40px;
    color: #395f72;
    font-size: 20px;
    text-align: justify;
    text-justify: inter-word;
}

.text-center
{
    padding: 30px;
}
.column img {
    height: 500px;
    width: 500px;
}
.txt
{
    padding: 20px;
    margin-top: -70%;
    font-size: 20px;
}
.txt1
{

    padding: 20px;

    font-size: 20px;
}
/* .cardstyle
{
    clip-path: polygon(25% 0%, 80% 0, 100% 55%, 100% 100%, 0 100%, 0% 50%);
} */
/* .homeimg
{
    margin-left:400;
}  */
.cardalign
{
    display: flex;
    padding: 50px;
    margin-top: 30px;
    margin-left: 15%;
    gap: 100px;
}
.column
{
    float: left;
  width: 33.33%;
  padding: 5px;
}
/* .cardalign
{
    margin-left: 150px;
} */
/* .row
{
    float: left;
} */

</style>