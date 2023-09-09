//lazy loading
const container = document.querySelector(".marketing-content-outer");
let limit = 1;
let pageCount = 1;
const getPost = async () =>{
    const response = await fetch(`https://run.mocky.io/v3/0b8f4770-307a-4d69-aebc-a81dfa3b494d/page/?_limit=${limit}$_page=${pageCount}`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm,index) => {
	 const htmlData=`
 <div class="card card-stretch marketing-content mb-8 fs-5">
    <div class="card-body">
    <!--Product Box Start-->
    <div class="row">
    <div class="col-sm-12 col-md-4 col-lg-5">
       <div class="channel">
          ${curElm.channel}
       </div>
       <div class="media mb-5">
          <div class="row gx-5">
                <div class="col-sm-12">
                   <div class="media-content img-wrapper border rounded mb-5">
                      <img src="${curElm.featureimage}" class="img-fluid">
                   </div>
                </div>
                <div class="col-sm-6">
                   <div class="media-content thumbnail img-wrapper border rounded mb-5 h-100">
                      <img src="${curElm.thumbnail1}" class="img-fluid">
                   </div>
                </div>
                <div class="col-sm-6">
                   <div class="media-content thumbnail img-wrapper border rounded mb-5 h-100">
                      <img src="${curElm.thumbnail2}" class="img-fluid">
                   </div>
                </div>
                <div class="col-sm-12">
                  <div  class="img-wrapper d-flex justify-content-center align-items-center rounded border mb-5 p-2 h-100" >
                     <video class="embed-responsive-item" controls width="100%"> 
                        <source src="${curElm.vedio}" type="video/mp4">
                        Your browser does not support the video tag.
                     </video>
                  </div>
                </div>
             </div>
          </div>
       </div>
       <div class="col-padding col-sm-12 col-md-8 col-lg-7">
          <div class="promo-media-content">
             <div class="skus mb-5 mb-sm-3">
                <div class="row gx-3 fs-6 fs-sm-7 lh-sm">
                   <div class="col-sm-12">
                      <h4 class="text-primary fw-bold">SKUs</h4>
                   </div>
                   <div class="col-sm-3 text-center mb-4 mb-sm-0">
                      <div class="sku-content border rounded p-3 p-sm-2 h-100">
                        <div class="img-wrapper mb-2">
                          <img src="${curElm.taggedskus[0].image}" class="img-fluid">
                        </div>
                        <span>${curElm.taggedskus[0].title}</span>
                      </div>
                   </div>
                   <div class="col-sm-3 text-center mb-4 mb-sm-0">
                      <div class="sku-content border rounded p-3 p-sm-2 h-100" >
                      <div class="img-wrapper mb-2">
                         <img src="${curElm.taggedskus[1].image}" alt="" class="img-fluid">
                         </div>
                         <span>${curElm.taggedskus[1].title}</span>
                      </div>
                   </div>
                   <div class="col-sm-3 text-center mb-4 mb-sm-0">
                      <div class="sku-content border rounded p-3 p-sm-2 h-100">
                      <div class="img-wrapper mb-2">
                         <img src="${curElm.taggedskus[2].image}" alt="" class="img-fluid">
                         </div>
                         <span>${curElm.taggedskus[2].title}</span>
                      </div>
                   </div>
                   <div class=" col-sm-3 text-center">
                      <div class="sku-content border rounded p-3 p-sm-2 h-100">
                      <div class="img-wrapper mb-2">
                         <img src="${curElm.taggedskus[3].image}" alt="" class="img-fluid">
                         </div>
                         <span>${curElm.taggedskus[3].title}</span>
                      </div>
                   </div>
                </div>
             </div>
             <div class="row">
                <div class="col-sm-12 ">
                   <ul class=" bg-gray-200 p-5 outer-list list-inline mb-5 rounded">
                      <li>
                         <h4 class="text-primary   fw-bold">Subject</h4>
                         <p>${curElm.subject}</p>
                      </li>
                      <li>
                         <h4 class="text-primary   fw-bold">Marketplace</h4>
                         <p>${curElm.marketplace}</p>
                      </li>
                      <li>
                         <h4 class="text-primary   fw-bold">Url</h4>
                         <a href="#" class="text-danger">${curElm.url}</a>
                      </li>
                      <li>
                         <h4 class="text-primary   fw-bold">Custom Segments</h4>
                         <ul class="list-inline p-0">
                            <li>${curElm.customsegments[0]}</li>
                            <li>${curElm.customsegments[1]}</li>
                            <li>${curElm.customsegments[2]}</li>
                         </ul>
                      </li>
                      <li>
                         <h4 class="text-primary   fw-bold">Brands</h4>
                         <ul class="list-inline p-0">
                            <li>${curElm.brands[0]}</li>
                            <li>${curElm.brands[1]}</li>
                            <li>${curElm.brands[2]}</li>
                            <li>${curElm.brands[3]}</li>
                            <li>${curElm.brands[4]}</li>
                         </ul>
                      </li>
                      <li>
                         <h4 class="text-primary   fw-bold">Spirits Categories</h4>
                         <ul class="list-inline p-0">
                            <li>${curElm.SpiritsCategories[0]}</li>
                            <li>${curElm.SpiritsCategories[1]}</li>
                            <li>${curElm.SpiritsCategories[2]}</li>
                         </ul>
                      </li>
                      <li>
                         <h4 class="text-primary   fw-bold">Spirits Sub-Categories</h4>
                         <ul class="list-inline p-0">
                            <li>${curElm.SpiritsSubCategories[0]}</li>
                            <li>${curElm.SpiritsSubCategories[1]}</li>
                            <li>${curElm.SpiritsSubCategories[2]}</li>
                            <li>${curElm.SpiritsSubCategories[3]}</li>
                         </ul>
                      </li>
                      <li>
                         <h4 class="text-primary   fw-bold">Wine Categories</h4>
                         <ul class="list-inline p-0">
                            <li>${curElm.WineCategories[0]}</li>
                            <li>${curElm.WineCategories[1]} </li>
                         </ul>
                      </li>
                      <li>
                         <h4 class="text-primary   fw-bold">Wine Sub-Categories</h4>
                         <ul class="list-inline p-0">
                            <li>${curElm.WineSubCategories[0]}</li>
                            <li>${curElm.WineSubCategories[1]}</li>
                            <li>${curElm.WineSubCategories[2]}</li>
                            <li>${curElm.WineSubCategories[3]}</li>
                         </ul>
                      </li>
                      <li>
                         <h4 class="text-primary   fw-bold">Custom Groupings</h4>
                         <p>${curElm.customGroupings}</p>
                      </li>
                      <li>
                         <h4 class="text-primary   fw-bold">Full Text</h4>
                         <p>${curElm.fulltext}
                         </p>
                      </li>
                   </ul>
                </div>
                <div class="col-sm-12">
                   <button class="btn btn-primary mt-1">Update</button>
                </div>
             </div>
          </div>
       </div>     
    </div>
 </div>   `;
	container.insertAdjacentHTML('beforeend', htmlData);
    })

}

getPost();

const showData = ()=>{
    $('#loading').show();
    setTimeout(()=>{
	pageCount++;
	$('#loading').hide();
	getPost();
    },3000)
};

window.addEventListener('scroll', () => {
    const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight){
	showData();
    }
})
    
