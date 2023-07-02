import PropTypes from "prop-types";


function User({name, surname, age, isLoggedin, friends, adress}) {
    if (!isLoggedin) {
        return <div>GIRIS YAPMADINIZ</div>;
    }
    return (
        <>
        
        <h1>  
        
        {`GIRIS YAPILDI -> ${name} ${surname}, YAS: ${age}`}
        
        </h1>
        {/* {friends.map((friend, index)=>(
            <div key={index}>
               {index} - {friend}  
            </div>

        )

         )} */}

         {adress.title} {adress.zip}
         <br></br>
         <br></br>
         {friends.map((friend)=>
         <div key={friend.id}>
            {friend.name}  
        </div>    
         
         )}



        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isLoggedin: PropTypes.bool.isRequired,
    friends: PropTypes.array.isRequired,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
};

User.defaultProps ={
    name: 'ISIMSIZ',
    surname:'SOYISIM',
    isLoggedin: false
}

export default User;