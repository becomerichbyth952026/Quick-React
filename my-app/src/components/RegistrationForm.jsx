import React from "react";


export function RegistrationForm () {

    return(
      <div>
        
          <div class="tilte-registration"><h1>Registration Form</h1></div>

         <div class="form"> 

          <form> {/* starting form list*/}


            <div id="Season"> {/* SEASON */}
              <label for='Season'>Season:</label><input class="players-details" type="Season" id="Season" name="Season" value=""/>
            </div>
            <div id="players-name"> {/* PLAYERS NAME */}
              <label for="players-name">Player's First Name:</label><input class="players-details" type="name" id="name" name="name" value=""/>
              <label for="player-sr">Last Name:</label><input class="players-details" type="sur" id="sur"  name="sur" value=""/>
            </div>
            <div id="address"> {/* ADDRESS */}
              <label for="address">Street Address:</label><input class="players-details" type="text" />
            </div>
            <div id="city-zip"> {/* CITY & ZIP CODEE */}
              <label for="city">City:</label><input class="players-details" type="city" id="city" name="city" value=""/>
              <label for="Zip">Zip:</label><input class="players-details" type="zip" id="zip" name="zip" value=""/>
            </div>
            <div id="birthday-gender"> {/* BDAY & GENDER */}
              <label for="birthday">Birth Date (mm/dd/yyyy):</label><input class="players-details" type="bday" id="bday" name="bdya" value="" />
              <label for="gender">Gender:</label>
              <label for="female"><input class="players-details" type="radio" id="radio" name="radio" value=""></input>Female</label>
              

            </div>

          </form>




         </div>
        
      </div>
    )

}