<template>
    <div>
        <div class="row fig">
    <div class="col-12 col-md-4"><img
        src="https://3.imimg.com/data3/BR/YV/MY-2343353/village-figurative-painting-500x500.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
        /></div>
    <div class="col-6 col-md-6"> <img
        src="https://indianartideas.in/articleimages/1412681741Untitled.png"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
        /></div>
        <!-- <div class="col-6 col-md-4"><img
        src="https://arts.mojarto.com/productImages/MA271301/384/MA271301.jpeg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
        /></div> -->
    </div>

    <h3>
        History of Abstract Painting in art
        <small class="text-muted">Beginning in the 1950s abstract art was an accepted and widely practiced approach within European and American painting and sculpture. Abstract art puzzled and indeed confused many people, but for those who accepted its nonreferential language there is no doubt as to its value and achievements. See also modern art.</small>
    </h3>

    <div class="cardalign">
        <div v-for="arts in art1" :key="arts.title" class="card cardstyle" style="width:200px; height:250px">
            <img class="card-img-top" v-bind:src="arts.image.img"  alt="No Image" target="_blank">    
                <div class="card-body">
                    <h4 class="card-title">Vilage Painting</h4>
                    <h3>{{ arts.title }}</h3>
                    <router-link to="/BuyPainting" class="btn btn-primary bg-danger"> Buy Now</router-link>
                </div>  
        </div>
    </div>

    <div class="cardalign">
        <div v-for="arts in art1" :key="arts.title" class="card cardstyle" style="width:200px; height:250px">
            <img class="card-img-top" v-bind:src="arts.image.img"  alt="No Image" target="_blank">    
                <div class="card-body">
                    <h4 class="card-title">Vilage Painting</h4>
                    <h3>{{ arts.title }}</h3>
                    <router-link to="/BuyPainting" class="btn btn-primary bg-danger"> Buy Now</router-link>
                </div>  
        </div>
    </div>


    <div class="cardalign">
        <div v-for="arts in art1" :key="arts.title" class="card cardstyle" style="width:200px; height:250px">
            <img class="card-img-top" v-bind:src="arts.image.img"  alt="No Image" target="_blank">    
                <div class="card-body">
                    <h4 class="card-title">Vilage Painting</h4>
                    <h3>{{ arts.title }}</h3>
                    <router-link to="/BuyPainting" class="btn btn-primary bg-danger"> Buy Now</router-link>
                </div>  
        </div>
    </div>

<!-- Gallery -->
    <FooterFile/>       
    </div>
</template>

<script>
import FooterFile from '@/components/FooterFile';
// import HeaderFile from '@/components/HeaderFile';
export default
{
    components:
    {
        FooterFile,
        // HeaderFile
    },
    data(){
        return{
            layout: 'list',
            art1: [{
			title:'₹15000',
            image:{
                'img':'http://www.contemporaryartissue.com//wp-content/uploads/2021/08/Schermafbeelding-2021-08-28-om-14.16.29.png'
            }       
		}, {
			title:'₹45000',
            image:{
                'img':'https://1.bp.blogspot.com/-A0SoFp67c6Q/XUa_SrwboFI/AAAAAAACITk/aFgCCm6d7j4-tdit2Zjyw-bGa20SyWYugCEwYBhgL/s1600/Spartaco%2BLOMBARDO%2B-%2BCatherine%2BLa%2BRose%2B%25288%2529.jpg'        }
		}, {
			title:'₹51000',
            image:{
                'img':'https://contemporaryartandartist.files.wordpress.com/2017/01/figurative-art.jpg'         }
		}, {
			title:'₹5000',
            image:{
                'img':'https://media.istockphoto.com/id/1134512518/photo/abstract-hand-painted-art-background-on-canvas.jpg?s=612x612&w=0&k=20&c=9q1y7CGMBGpoVzVKCIvRqQrE9FZu3F4VGfjIcUHgpvY='       }
		}], 
    }

    
}
}
</script>
<style>
.fig
{
    /* padding: 20px; */
    margin-left: 200px;
    margin-right: 50px;

}

.col-12 col-md-8
{
    height: 20px;
}
</style>