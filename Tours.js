import Card from "./Card";


function Tours ({tours,unintrested})
{
    return (
      // ye to parent div 
      <div className="container">
        <div className="main heading">
            <h2 className="main"> Let's eNJOY This Summer </h2>
        </div>

        <div className="cards">
          {/* [<Card></Card>]  Humare pass option hai ki aise n number of Cards bnane k liye hum bar bar Cards likhe   */}
          {/* But isse acha hum map function ka use krenge  jisse single line se kitne hi cards create hoskte hai  */}
          {

          tours.map((tour)=>{
            return <Card {...tour} unintrested={unintrested}></Card>  // hum yha pr object clone krenge spread operator se [...tour]
            
          })

          
          }


        </div>
      </div>
    )
};

export default Tours;
