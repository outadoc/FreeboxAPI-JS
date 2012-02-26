function getXMLHttpRequest() {
    var xhr = null;
    
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest(); 
        }
    } else {
        return null;
    }
    
    return xhr;
}

var FreeboxKey = {
    NUM_ONE:'1',
    NUM_TWO:'2',
    NUM_THREE:'3',
    NUM_FOUR:'4',
    NUM_FIVE:'5',
    NUM_SIX:'6',
    NUM_SEVEN:'7',
    NUM_EIGHT:'8',
    NUM_NINE:'9',
    NUM_ZERO:'0',
        
    RED:'red',
    YELLOW:'yellow',
    BLUE:'blue',
    GREEN:'green',
        
    DIR_UP:'up',
    DIR_DOWN:'down',
    DIR_LEFT:'left',
    DIR_RIGHT:'right',
        
    VOL_INC:'vol_inc',
    VOL_DEC:'vol_dec',
        
    PRGM_INC:'prgm_inc',
    PRGM_DEC:'prgm_dec',
        
    OK:'ok',
    BACK:'back',
    SWAP:'swap',
    POWER:'power',
    FREE:'home',
    MUTE:'mute',
        
    LIST:'list',
    MAIL:'mail',
    AUX:'tv',
    PIP:'pip',
    EPG:'epg',
        
    PLAYER_RECORD:'rec',
    PLAYER_PREV:'prev',
    PLAYER_BACKWARD:'bwd',
    PLAYER_PLAY:'play',
    PLAYER_STOP:'stop',
    PLAYER_FORWARD:'forward',
    PLAYER_NEXT:'next'
};

function Freebox(hd, code) {
    this.callKey = function(key, isLong) {
        key = String(key);
        isLong = String(isLong);
        
        var url = 'http://' + 'hd' + this.getHd() + '.freebox.fr/pub/remote_control?code=' + this.getCode() + '&key=' + key + '&long=' + isLong;
        this.xhr.open('GET', url, true);
		this.xhr.send(null);
    };
    
    this.callChannel = function(channel) {
        channel = String(channel);
        	
        for(var i = 0; i < (channel.length); i++) {
		 	if(i == (channel.length - 1)) {
				callKey(channel.charAt(i), false);
			} else {
				callKey(channel.charAt(i), true);
			}
		}
    };
    
    this.setCode = function(code) {
    	if(parseInt(code) == String(code)) {
    		this.code = code;
            return 0;
    	}
    	return 1;
    };
    
    this.getCode = function() {
    	return this.code;
    };
    
    this.setHd = function(hd) {
    	this.hd = hd;
        return 0;
    };
    
    this.getHd = function() {
    	return this.hd;
    };
    
    this.setHd(hd);
    this.setCode(code);
    this.xhr = getXMLHttpRequest();
}