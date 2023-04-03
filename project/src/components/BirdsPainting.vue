<template>

<div>
    <div class="row">
        <div class="col-sm-4 brd"><img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/summer-rapture-wanda-mumm.jpg" alt="" srcset=""></div>
        <div class="col-sm-4 brd"><img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/lilacbreasted-roller-david-stribbling.jpg" alt=""></div>
        <!-- <div class="col-sm-4">.col-sm-4</div> -->
    </div>

    <h3>
        History of Bird Art
        <small class="text-muted">The human history of depicting birds dates to as many as 40,000 years ago, when Paleolithic artists took to cave walls to capture winged and other beasts. But the art form has reached its peak in the last four hundred years. In The Art of the Bird, devout birder and ornithologist Roger J.</small>
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
        <div v-for="arts in art2" :key="arts.title" class="card cardstyle" style="width:200px; height:250px">
            <img class="card-img-top" v-bind:src="arts.image.img"  alt="No Image" target="_blank">    
                <div class="card-body">
                    <h4 class="card-title">Village Painting</h4>
                    <h3>{{ arts.title }}</h3>
                    <router-link to="/BuyPainting" class="btn btn-primary bg-danger"> Buy Now</router-link>
                </div>  
        </div>
    </div>

    <div class="cardalign">
        <div v-for="arts in art3" :key="arts.title" class="card cardstyle" style="width:200px; height:250px">
        <!-- <div class="card cardstyle" style="width:200px; height:250px"> -->
            <!-- <img class="card-img-top" src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/84159/137163/1648663259319_CityScape__30142.1648815079.jpg?c=2" alt="Card image"> -->
            <img class="card-img-top" v-bind:src="arts.image.img"  alt="No Image" target="_blank">    
                <div class="card-body">
                    <h4 class="card-title">Vilage Painting</h4>
                    <!-- <h3 class="card-title">₹15000</h3> -->
                    <h3>{{ arts.title }}</h3>
                    <router-link to="/BuyPainting" class="btn btn-primary bg-danger"> Buy Now</router-link>
                </div>  
        </div>
    </div>
    <FooterFile/> 
</div>
</template>

<script>
import FooterFile from '@/components/FooterFile';
export default
{
    components:
    {
        FooterFile,
        // HeaderFile
    },
    name:'GridList',
    data(){
        return{
            layout: 'list',
            art1: [{
			title:'₹15000',
            image:{
                'img':'https://media.wired.com/photos/5a14aa03215f39701628fbea/master/w_2560%2Cc_limit/birds.jpg'
            }       
		}, {
			title:'₹45000',
            image:{
                'img':'https://t3.ftcdn.net/jpg/03/13/41/78/360_F_313417884_vzWRwHo7KyxuzfhNPAQT5uvtWojrpV2b.jpg'        }
		}, {
			title:'₹51000',
            image:{
                'img':'data:image/jpeg;base64,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'         }
		}, {
			title:'₹5000',
            image:{
                'img':'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/indigo-bunting-blue-bird-watercolor-olga-shvartsur.jpg'       }
		}], 

        art2: [{
			title:'₹15000',
            image:{
                'img':'https://images.template.net/wp-content/uploads/2017/01/20101251/Bird-Drawing.jpg'
            }       
		}, {
			title:'₹15000',
            image:{
                'img':'https://webneel.com/daily/sites/default/files/images/daily/07-2015/15-bird-art-by-crista-forest.jpg'        }
		}, {
			title:'₹15000',
            image:{
                'img':'https://cdn.shopify.com/s/files/1/0591/9784/9807/products/FA10028_72d7e0eb-144d-4ab1-bd96-373e9b28c83a_530x@2x.jpg?v=1635535404'         }
		}, {
			title:'₹15000',
            image:{
                'img':'https://cdn11.bigcommerce.com/s-do0ookap9x/images/stencil/original/products/7133/8450/apib9mdpk__82092.1506889646.jpg?c=2'       }
		}],

        art3: [{
			title:'₹15000',
            image:{
                'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjHiZ6AnijA8cD1mSIAo9d8CSKvazpGo3fbBPAKNz1QrjZjA9uHHWhjqWbjuArXgVb4g&usqp=CAU'
            }       
		}, {
			title:'₹15000',
            image:{
                'img':'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/summer-rapture-wanda-mumm.jpg'        }
		}, {
			title:'₹15000',
            image:{
                'img':'https://render.fineartamerica.com/images/rendered/default/print/8/6.5/break/images/artworkimages/medium/1/27-birds-jennifer-lommers.jpg'         }
		}, {
			title:'₹15000',
            image:{
                'img':'https://t3.ftcdn.net/jpg/03/13/41/78/360_F_313417884_vzWRwHo7KyxuzfhNPAQT5uvtWojrpV2b.jpg'       }
		}],
        }

    
    }
}   
</script>

<style>
/* .cardalign
{
    display: float;
} */
.brd
{
    position: relative;
    /* margin-top: 45px; */
    margin-left:110px;
}

</style>