<template>
    <div>
        <div class="row fig">
    <div class="col-12 col-md-4"><img
        src="https://www.liveabout.com/thmb/EJWbykkNMzmRJV9R0BDxzkpqquM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8231178822_738f0c47cd_o-57c734135f9b5829f46e9338.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
        /></div>
    <div class="col-6 col-md-6"> <img
        src="https://www.indiaart.com/Paintings/3733/Large/19090.jpg.ashx?height=350"
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
        History of Monochrome Painting in art
        <small class="text-muted">Among the first was Kazimir Malevich who about 1917–18 created a series of white on white paintings (see suprematism). The German minimalist artist's known as 'Zero' used monochrome as an opportunity to unveil the artistic process, often slashing or creating raised shapes on white or black canvases.</small>
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
                'img':'https://i.pinimg.com/originals/ab/ff/de/abffde68a887591a748f36fc416f1b12.jpg'
            }       
		}, {
			title:'₹45000',
            image:{
                'img':'https://www.indiaart.com/Paintings/3733/Large/19090.jpg'        }
		}, {
			title:'₹51000',
            image:{
                'img':'https://i.pinimg.com/originals/01/95/a1/0195a1e4f49f2d3129e283a5c26c4791.jpg'         }
		}, {
			title:'₹5000',
            image:{
                'img':'https://i.pinimg.com/originals/1e/9e/c9/1e9ec9c3b888b0e4bd7feb5423f5ae41.jpg'       }
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