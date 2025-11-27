import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './App.css'

function App() {

  return (
    <>
      <div className='divMainContainer'>
        <div className='divLeftContainer'>
          <div className='divBasicSearch'>
            <div className='divContentHeader'>Find the product you are looking for</div>
            <div className='divContent'><input type='textbox' className='basicTextBox' placeholder='Search Product Code | Name | UPC Code | FG Spec | Need State'></input> </div>
          </div>
          <div className="divExploreKeySection">
            <div className="divKeySectionHeader">
              Explore Key Features
            </div>
            <div className="divKeySectionContent">
              <div className='divKeyContent'>
                <div className='divContentHeader'><a>Advanced Search</a><img src='../src/assets/icons/adv_search_icon.png'></img></div>
                <div className='divContent'>Search by ingredients, materials, formulas, products or bill of
                  artwork to identify where used relationship and download
                  result for analysis. </div>
              </div>
              <div className='divKeyContent'>
                <div className='divContentHeader'><a>Bulk Search</a><img src='../src/assets/icons/bulk_search_icon.png'></img></div>
                <div className='divContent'>By uploading excel file with list of Product names, Product
                  codes or UPC code search for multiple produce at once.</div>
              </div>
              <div className='divKeyContent'>
                <div className='divContentHeader'><a>Browse Products</a><img src='../src/assets/icons/browse_icon.png'></img></div>
                <div className='divContent'>Browse products in the system, apply filters to refine your
                  selection and download results for deeper analysis.</div>
              </div>
              <div className='divKeyContent'>
                <div className='divContentHeader'><a>Compare Products</a><img src='../src/assets/icons/compare_icon.png'></img></div>
                <div className='divContent'>Select two products by entering their Product Name, Code,
                  or UPC to view comparison of their features & specifications.</div>
              </div>
            </div>
          </div>
          <div className='divRecentlySavedProducts'>
            <div className='divKeyContent'>
              <div className='divContentHeader'>Recently Activated Products</div>
              <div className='divImageList'>
                <div>
                  <div><img src='../src/assets/Aveeno baby Eczema Therapy.png' className='imgDimensions'></img></div>
                  <div><a>Aveeno baby Eczema Therapy</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className='divDidYouKnow'>
            <div className='divContentHeader'>Did you know?</div>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showArrows={true}
              showIndicators={true}
              showStatus={false}
              showThumbs={false}
              swipeable={true}
              interval={6000}
            >
              <div className='divContent'>
                You can search up to 25 values separated by commas on any search category attribute while performing  a basic textbox search. This can be  a quicker alternative to the bulk search
              </div>

              <div className='divContent'>
                You can click the message icon on the bottom right corner of the application to trigger a chatbot that can answer any question you have on ProductVue features and data displayed.
              </div>
            </Carousel>
          </div>
          <div className='divBottomSection'>
            <div className='divUserReview'>
              <div className='divContentHeader'>User Reviews</div>
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
                showIndicators={true}
                showStatus={false}
                showThumbs={false}
                swipeable={true}
                interval={6000}
              >
                <div className='divContent'>
                  It’s a very amazing and helpful tool. I send over a year attempting to gather much of this information a few years ago, and today I can simply choose a brand and download a spreadsheet of all active products which is SO HELPFUL!
                </div>
                <div className='divContent'>
                  It really offers valuable insights and deeper understanding of the products, we can get details from a product that is manufactured in different regions.
                </div>
              </Carousel>
            </div>
            <div className='divSurveyResult'>
              <div className='divContentHeader'>Survey Results</div>
              <div className='divContent'>
                <img src="../src/assets/nps_score.png" className="imgNPS"></img>
                We are happy to share the NPS score we received In
                our recent ProductVue user survey!<br></br>
                Thank you for using ProductVue!!! </div>
            </div>
          </div>
        </div>
        <div className='divRightContainer'>
          <div className='divRightContentBlock'>
            <div className='divRightContentHeader'>Last Data Refresh Date</div>
            <div className='divRightContent'>12/Nov/2025 03:20 PM</div>
          </div>
          <div className='divRightContentBlock'>
            <div className='divRightContentHeader'>Community Spotlight</div>
            <div className='divRightContent'><div>Join <b>1170</b> Kenvuers active on ProductVue!</div></div>
          </div>
          <div className='divRightContentBlock'>
            <div className='divRightContentHeader'>What’s New?</div>
            <div className='divRightContent'>
              <a><img src='../src/assets/icons/leadership_icon.png'></img>Product Spotlight</a>
              <div className="video-block">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID">
                </iframe>
              </div>
            </div>
          </div>
          <div className='divRightContentBlock'>
            <div className='divRightContentHeader'>Quick Access Links</div>
            <div className='divRightContent'>
              <div><b>Get Started</b></div>
              <a><img src='../src/assets/icons/Reel_icon.png'></img>Sizzle Reel</a>
              <a><img src='../src/assets/icons/user_manual.png'></img>User Guide</a>
              <div><b>Resources</b></div>
              <a><img src='../src/assets/icons/data_dictionary_icon.png'></img>Data Dictionary</a>
              <a><img src='../src/assets/icons/formula_icon.png'></img>Formulated without or with Criteria</a>
              <a><img src='../src/assets/icons/app_tour_icon.png'></img>Data Coverage Metrics</a>
              <a><img src='../src/assets/icons/Reel_icon.png'></img>Product Videos</a>
              <div><b>Requests & Forms</b></div>
              <a><img src='../src/assets/icons/intake_form_icon.png'></img>Intake Form</a>
              <a><img src='../src/assets/icons/request_data_icon.png'></img>Request Data</a>
              <a><img src='../src/assets/icons/request_access_icon.png'></img>Request Access</a>
              <a><img src='../src/assets/icons/meet.png'></img>Contact ProductVue Team</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
