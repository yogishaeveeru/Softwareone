const container = document.querySelector(".feeds-detail-outer");
const getfeeds = async () => {
    const response = await fetch(`https://run.mocky.io/v3/8ab7925c-59dc-49ee-a20e-860a9da08529`);
    //console.log(response);
    const data = await response.json();
    // console.log(data[0]);
    data.map((curElm, index) => {
	        const htmlData = `
        <div class="col-sm-12  mb-3">
        <div class="card card-stretch fs-5">
           <div class="card-body">
              <div class="row">
                 <div class="col-md-6">
                    <div class="media-text">
                       <span >${curElm.channel}</span>
                       <p>${curElm.text}</p>
                       <div class="row py-0 py-sm-2 ">
                          <div class=" col-sm-12">
                          <div class="feeds-detail d-flex mb-7 text-muted">
                          <div class="icon me-4 bg-light">
                               <i class="fas fa-calendar-alt"></i>
                          </div>
                          <div class="">
                             <p class="text-muted small-text mb-0 mt-1 fs-6 fw-bold">Posted On</p>
                             <ul class="list-inline m-0 text-gray-700 fw-bold">
                                <li>
                               ${curElm.posted_on}
                                </li>
                             </ul>
                          </div>
                       </div>
                   
                             <div class="feeds-detail d-flex mb-7 text-muted">
                                <div class="icon  me-4 bg-light">
                                       <i class="fas fa-pencil-alt"></i>
                                </div>
                                <div class="">
                                   <p class="text-muted mb-2  mt-1 fs-6 fw-bold">Posted By</p>
                                   <ul class="list-inline m-0 text-gray-700 fw-bold">
                                      <li>
                                         <div class="img-wrapper border  border-dashed  border-gray-300 rounded me-2">
                                            <img src="${curElm.marketplace_logo}" alt="" class="img-fluid">
                                         </div>
                                         ${curElm.posted_by}
                                      </li>
                                   </ul>
                                </div>
                             </div>
                            

                             <div class="feeds-detail d-flex mb-7 text-muted">
                                <div class="icon me-4 bg-light">
                                      <i class="fas fa-tags"></i>
                                </div>
                                <div class="">
                                   <p class="text-muted small-text mb-2 mt-1  fs-6 fw-bold">Brands Referenced</p>
                                   <ul class="list-inline m-0 text-gray-700 fw-bold">
                                      <li>
                                         <div class="img-wrapper border rounded border-gray-300 border-dashed me-2">
                                            <img src="${curElm.brands_refrenced[0].brand_logo}" alt="" class="img-fluid">
                                         </div>
                                         ${curElm.brands_refrenced[0].brand_name}
                                      </li>
                                      <li>
                                         <div class="img-wrapper border  border-dashed  border-gray-300 rounded me-2">
                                            <img src="${curElm.brands_refrenced[1].brand_logo}" alt="" class="img-fluid">
                                         </div>
                                         ${curElm.brands_refrenced[1].brand_name}
                                      </li>
                                      <li>
                                         <div class="img-wrapper border  border-dashed  border-gray-300 rounded me-2">
                                            <img src="${curElm.brands_refrenced[2].brand_logo}" alt="" class="img-fluid">
                                         </div>
                                         ${curElm.brands_refrenced[2].brand_name}
                                      </li>
                                      <li>
                                      
                                         <div class="img-wrapper border  border-dashed  border-gray-300 rounded me-2">
                                            <img src="${curElm.brands_refrenced[3].brand_logo}" alt="" class="img-fluid">
                                         </div>
                                         ${curElm.brands_refrenced[3].brand_name}
                                      </li>
                                   </ul>
                                </div>
                             </div>
                             
                             <div class="feeds-detail d-flex mb-7 text-muted">
                                <div class="icon me-4 bg-light">
                                      <i class="fas fa-wine-glass-alt fs-5"></i>
                                </div>
                                <div class="">
                                   <p class="text-muted small-text my-1  fs-6 fw-bold">SKUs Referenced</p>
                                   <ul class="list-inline m-0 text-gray-700 fw-bold">
                                      <li>
                                      ${curElm.sku_refrenced}
                                      </li>

                                   </ul>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="col-md-6">
                    <div class="row">
                       <div class="col-sm-12 mb-4 ">
                          <div class="img-wrapper border rounded bg-light ">
                             <img src="${curElm.image}" class="img-fluid p-4">
                          </div>
                       </div>
                       <div class="col-sm-12">
                          <div  class="img-wrapper d-flex justify-content-center align-items-center bg-light rounded border p-4" >
                             <video class="embed-responsive-item" controls width="100%">
                                <source src="${curElm.video}" type="video/mp4">
                                Your browser does not support the video tag.
                             </video>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    `;
	container.insertAdjacentHTML('beforeend', htmlData);
    })
}

getfeeds();
