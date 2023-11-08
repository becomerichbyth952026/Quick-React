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
              <label class="gender" for="gender">Gender:</label>
              <input type="radio" id="female" value=""/> <label class="female" for="Female">Female</label>
              <input type="radio" id="male" value=""/> <label for="male">Male</label>
            </div>
            
            <div class="grade">
              <label id="grade" for="grade">Grade:</label> {/* GRADE */}
              <input type="radio" id="pre-school" value=""/><label class="male" for="male">Pre-School</label>
              <input type="radio" id="grade-one" value=""/><label class="first" for="male">1st</label>
              <input type="radio" id="grade-two" value=""/><label class="second" for="male">2nd</label>
              <input type="radio" id="grade-three" value=""/><label class="third" for="male">3rd</label>
              <input type="radio" id="grade-four" value=""/><label class="fourth" for="male">4th</label>
              <input type="radio" id="grade-five" value=""/><label class="fifth" for="male">5th</label>

            </div>

            <div>  {/* PARENT/GUARDIAN */}
            <label for="parent-guardian">Parent/Guardian:</label><input class="players-details" type="parent" id="parent" name="parent" value=""/>
            </div>

            <div> {/* CONTACT EMAIL-PHONE */}
            <label for="contact-phone">Contact Phone:</label><input class="players-details" type="contact" id="contact" name="contact" value=""/>
            <label for="contact-email">Contact Email:</label><input class="players-details" type="contact" id="contact" name="contact" value=""/>
            </div>

              <div> {/* SCHOOL LIST */}
                <b>Which elementary schools do you live near?</b>

                <div>
                  <div class="elementary-school">
                    <b>First Closest School:</b><br />
                    <select name='first_school'>
                      <option value='null'>Select First School</option>
                      <option value='AJ Katzenmaier'>AJ Katzenmaier</option>
                      <option value='Marjorie P Hart'>Marjorie P Hart</option>
                      <option value='Greenbay'>Greenbay</option>
                      <option value='North Elementary'>North Elementary</option>
                      <option value='Howard A Yeager'>Howard A Yeager</option>
                      <option value='South Elementary'>South Elementary</option>
                    </select>
                  </div>
                    <div class="elementary-school">
                      <b>Second Closest School:</b><br />
                      <select name='second_school'>
                        <option value='null'>Select Second School</option>
                        <option value='AJ Katzenmaier'>AJ Katzenmaier</option>
                        <option value='Marjorie P Hart'>Marjorie P Hart</option>
                        <option value='Greenbay'>Greenbay</option>
                        <option value='North Elementary'>North Elementary</option>
                        <option value='Howard A Yeager'>Howard A Yeager</option>
                        <option value='South Elementary'>South Elementary</option>
                      </select>
                   </div>
                </div>
              </div>

              <div>  {/* TABLE WITH POSITION PLAYER */}
               <b>Which position(s) do you normally play?</b>
               <span class='question-clarifier'>(check all that apply)</span>
               <table>
                <tr>
                  <td><input type="checkbox" id="position" value=""/><label for="male">Forward</label></td>
                  <td><input type="checkbox" id="position" value=""/><label for="male">Midfield</label></td>
                </tr>

                <tr>
                  <td><input type="checkbox" id="position" value=""/><label for="male">Defence</label></td>
                  <td><input type="checkbox" id="position" value=""/><label for="male">Goalkeeper</label></td>
                </tr>
               </table>
              </div>

               <div> {/* TABLE WITH SIZE UNIFORM */}
                 Already Have a Uniform:
                 <input type='checkbox' name='has_uniform'></input>
                 
                 <div>

                  <table class="form-table">
                    <th>Jersey Size:</th>
                    <tr>
                      <td><input type="radio" id="size" value=""/> <label for="size">Youth Small</label></td>
                      <td><input type="radio" id="size" value=""/> <label for="size">Medium</label></td>
                    </tr>

                    <tr>

                    <td><input type="radio" id="youth-size" value=""/> <label for="size">Youth Medium</label></td>
                    <td><input type="radio" id="large" value=""/> <label for="large">Large </label></td>

                    </tr>

                    <tr>

                    <td><input type="radio" id="size" value=""/> <label for="size">Youth Large</label></td>
                    <td><input type="radio" id="size" value=""/> <label for="size">Extra Large</label></td>

                    </tr>

                    <tr>

                    <td><input type="radio" id="size" value=""/> <label for="size">Small</label></td>
                    <td></td>

                    </tr>

                  </table>

                  <table class="form-table">

                    <th>Short Size:</th>

                    <tr>

                      <td><input type="radio" id="size" value=""/> <label for="size">Youth Small</label></td>
                      <td><input type="radio" id="size" value=""/> <label for="size">Medium</label></td>

                    </tr>

                    <tr>

                      <td><input type="radio" id="size" value=""/> <label for="size">Youth Medium</label></td>
                      <td><input type="radio" id="size" value=""/> <label for="size">Large</label></td>

                    </tr>

                    <tr>
                      
                      <td><input type="radio" id="size" value=""/> <label for="size">Youth Large</label></td>
                      <td><input type="radio" id="size" value=""/> <label for="size">Extra Large</label></td>

                    </tr>

                    <tr>

                      <td><input type="radio" id="size" value=""/> <label for="size">Small</label></td>
                      <td></td>

                    </tr>
                  </table>
                 </div>
             </div>
          </form>

          <div id='permission-box'> {/* PERMISSION TO PLAY */}
          <div id='permission-box-title'>Permission to Play</div>
          <p>I, the parent or guardian of the minor registrant, agree that the registrant and I will abide by all the rules of the Northside Youth
            Soccer League (NYSL). In recognizing the<br /> possibility of physical injury associated with soccer and in consideration for the “League”
            accepting the registrant for its soccer programs and activities, I hereby release,<br />discharge, and/or otherwise indemnify NYSL, their
            employees and associated personnel and volunteers,<br /> including the facilities used for practices and games, against any claim<br />by or
            on behalf of the registrant as a result of the registrant’s participation in the program and/or being transported     to or from NYSL sponsored activities, which transportation.
          </p>
          <p>By entering your name below, I hereby agree and authorize the above. In addition, by signing below, I also acknowledge that I have read the
            cancellation policy and agree to its terms. 
          </p>
          <div>  {/* SIGNATURE & DATE */}
            <label>Parent/Guardian Signature: <input class="bottom-details-one"id='signature' name='signature'></input></label>
            <label>Date: <input class="bottom-details-two" id='date' name='date'></input></label>
          </div>
        </div>
          <div>
            <input class="submit-box" id='submit' type='submit'></input>
          </div>
         </div>
      </div>
    )

}