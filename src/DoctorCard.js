import "./Doc.css";
import Stars from "./Star";


const defaultRating = localStorage.getItem("starRating");
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img 
        src="doc.jpg"
        alt="doctorimage"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Dr.Roronoa Zoro</h1>
        <span className="siDistance">Gum Specialist</span>
        <span className="siDistance">11 years experience</span>
        <span className="siTaxiOp">Zoro Dental Clinic</span>
        <span className="siSubtitle">
          NA central Delhi
        </span>
        <span className="siFeatures">
         Monday to Friday
         10:00AM-3:00PM
        </span>
        <div className="siRating">
       4/5
        </div>
        <div className="siRating">
        24 reviews
        </div>
        <div>
      <Stars iconSize={25} defaultRating={defaultRating} />
      
      
      
    </div>
      </div>
      <div className="siDetails">
        
        <div className="siDetailTexts">
        <img 
        src="my.jpg"
        alt=""
        className="simy"
      />
        <span className="siTaxOp">Consultation fee:</span>
          <span className="siPrice">$600</span>
         
          <button className="siCheckButton">Book an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
