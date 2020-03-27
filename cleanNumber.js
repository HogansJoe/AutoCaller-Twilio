/***
 *     _____ _                    _   _                 _
 *    /  __ \ |                  | \ | |               | |
 *    | /  \/ | ___  __ _ _ __   |  \| |_   _ _ __ ___ | |__   ___ _ __
 *    | |   | |/ _ \/ _` | '_ \  | . ` | | | | '_ ` _ \| '_ \ / _ \ '__|
 *    | \__/\ |  __/ (_| | | | | | |\  | |_| | | | | | | |_) |  __/ |
 *     \____/_|\___|\__,_|_| |_| \_| \_/\__,_|_| |_| |_|_.__/ \___|_|
 *
 *
 */



const PhoneNumber = require( 'awesome-phonenumber' );

let number = "+31644994529";
let newNumber = "+31" + number.substr(number.length - 9);

newNumber; //?


PhoneNumber( '+31644994529' ).getRegionCode();  //?