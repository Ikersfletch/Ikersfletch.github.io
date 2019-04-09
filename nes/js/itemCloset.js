var closet = {
    'sword' : {
      'icon' : 0,
      'iconPalette' : 0,
      'name' : 'sword',
      'sprites' : [
        [
          [0,0,0,0,0,0,1,1],
          [0,0,0,0,0,1,1,1],
          [0,0,0,0,1,1,1,0],
          [0,2,0,1,1,1,0,0],
          [0,0,2,1,1,0,0,0],
          [0,2,2,2,0,0,0,0],
          [2,2,2,0,2,0,0,0],
          [2,2,0,0,0,0,0,0]
        ],
        [
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,2,0,0,0,0,0],
          [2,2,2,1,1,1,1,1],
          [2,2,2,1,1,1,1,1],
          [0,0,2,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0]
        ]
      ],
      'palettes' : [
        [[0,0,0,0],[255,255,255,255],[255,0,0,255],[0,0,0,255]]
      ],
      'boxes' : [
        
        {
          'spriteID' : 1,
          'paletteID' : 0,
          'conditions' : {
            'keyPress' : 'onPress',
            'delay' : 1,
            'clockSize' : 4,
            'holdTime' : 0,
            'maxHoldTime': 0,
            'mustBeInAir' : false,
            'mustBeOnGround' : true
          },
          'moveSelf' : {
            
            'x' : 30,
            'y' : 5,
            'v' : {
              'x' : 3,
              'y' : -5
            },
            'isSticky' : true,
            'doGravity' : false,
            'doPhysics' : false,
            'stickInTiles' : false
          },
          'hit' : {
            'damage' : 10,
            'friendlyFire' : false,
            'knockback' : 2,
            'knockV' : {
              'x' : 3,
              'y' : -5
            },
            'effect' : 'none',
            'friendlyEffect' : false,
            'strength' : 0,
            'duration' : 0,
            'chance' : 0
          },
          'movePlayer' : {
            'freezePlayer' : true,
            'preventOtherItems' : true,
            'addV' : {
              'x' : -5,
              'y' : 0
            },
            'addVelocityWhen' : 'onSpawn',
            'addVClock' : 0,
            'setV' : {
              'x' : 0,
              'y' : -5
            },
            'setVelocityWhen' : 'onSpawn',
            'setVClock' : 0
          },
          'death' : {
            'summon' : [],
            'timeToLive' : 6,
            'dieIfNotHeld' : true,
            'deathOnContact' : false
          }
          
        },
        {
          'spriteID' : 1,
          'paletteID' : 0,
          'conditions' : {
            'keyPress' : 'onPress',
            'delay' : 1,
            'clockSize' : 4,
            'holdTime' : 0,
            'maxHoldTime': 0,
            'mustBeInAir' : true,
            'mustBeOnGround' : false
          },
           
          'moveSelf' : {
            
            'x' : 40,
            'y' : 5,
            'v' : {
              'x' : 1,
              'y' : 0
            },
            'isSticky' : true,
            'doGravity' : false,
            'doPhysics' : true,
            'stickInTiles' : false
          },
          
          'hit' : {
            'damage' : 15,
            'friendlyFire' : false,
            'knockback' : 2,
            'knockV' : {
              'x' : 0,
              'y' : 0
            },
            'effect' : 'none',
            'friendlyEffect' : false,
            'strength' : 0,
            'duration' : 0,
            'chance' : 0
          },
          'movePlayer' : {
            'freezePlayer' : false,
            'preventOtherItems' : true,
            'addV' : {
              'x' : 2,
              'y' : 0
            },
            'addVelocityWhen' : 'onSpawn',
            'addVClock' : 0,
            'setV' : {
              'x' : 0,
              'y' : 0
            },
            'setVelocityWhen' : 'never',
            'setVClock' : 0
          },
          'death' : {
            'summon' : [],
            'timeToLive' : 6,
            'dieIfNotHeld' : true,
            'deathOnContact' : false
          }
        }
      ]
    },
    'pistol' : {
      'icon' : 0,
      'iconPalette' : 0,
      'name' : 'pistol',
      'sprites' : [
        [
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,1,0,0,0,0,0,0],
          [0,0,1,1,1,1,2,0],
          [0,1,1,2,1,1,2,0],
          [0,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
        ],
        [
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,1,1,1,0,0,0,0],
          [0,2,2,1,1,0,0,0],
          [0,2,2,1,1,0,0,0],
          [0,1,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
        ]
      ],
      'palettes' : [
        [[0,0,0,0],[100,100,100,255],[50,50,50,255],[255,0,0,255]],
        [[0,0,0,0],[255,255,255,255],[100,100,100,255],[255,0,0,255]]
      ],
      'boxes' : [
        
        {
          'spriteID' : 1,
          'paletteID' : 1,
          
          'conditions' : {
            'keyPress' : 'clockOnHold',
            'delay' : 0,
            'clockSize' : 1,
            'holdTime' : 0,
            'maxHoldTime': 0,
            'mustBeInAir' : false,
            'mustBeOnGround' : true
          },
           
          'moveSelf' : {
            
            'x' : 40,
            'y' : 0,
            'v' : {
              'x' : 25,
              'y' : -1
            },
            'isSticky' : false,
            'doGravity' : false,
            'doPhysics' : true,
            'stickInTiles' : true
          },
          
          'hit' : {
            'damage' : 10,
            'friendlyFire' : false,
            'knockback' : 2,
            'knockV' : {
              'x' : 0,
              'y' : -1
            },
            'effect' : 'none',
            'friendlyEffect' : false,
            'strength' : 0,
            'duration' : 0,
            'chance' : 0
          },
          'movePlayer' : {
            'freezePlayer' : true,
            'preventOtherItems' : true,
            'addV' : {
              'x' : 0,
              'y' : 0
            },
            'addVelocityWhen' : 'never',
            'addVClock' : 0,
            'setV' : {
              'x' : -3,
              'y' : -5
            },
            'setVelocityWhen' : 'onSpawn',
            'setVClock' : 0
          },
          'death' : {
            'summon' : [],
            'timeToLive' : 100,
            'dieIfNotHeld' : false,
            'deathOnContact' : false
          }
        },
        {
          'spriteID' : 0,
          'paletteID' : 0,
          
          'conditions' : {
            'keyPress' : 'clockOnHold',
            'delay' : 0,
            'clockSize' : 1,
            'holdTime' : 0,
            'maxHoldTime': 0,
            'mustBeInAir' : false,
            'mustBeOnGround' : true
          },
           
          'moveSelf' : {
            
            'x' : 30,
            'y' : -5,
            'v' : {
              'x' : 0,
              'y' : 0
            },
            'isSticky' : true,
            'doGravity' : false,
            'doPhysics' : true,
            'stickInTiles' : true
          },
          
          'hit' : {
            'damage' : 0,
            'friendlyFire' : false,
            'knockback' : 0,
            'knockV' : {
              'x' : 0,
              'y' : 0
            },
            'effect' : 'none',
            'friendlyEffect' : false,
            'strength' : 0,
            'duration' : 0,
            'chance' : 0
          },
          'movePlayer' : {
            'freezePlayer' : true,
            'preventOtherItems' : true,
            'addV' : {
              'x' : 0,
              'y' : 0
            },
            'addVelocityWhen' : 'never',
            'addVClock' : 0,
            'setV' : {
              'x' : -3,
              'y' : -5
            },
            'setVelocityWhen' : 'onSpawn',
            'setVClock' : 0
          },
          'death' : {
            'summon' : [],
            'timeToLive' : 5,
            'dieIfNotHeld' : false,
            'deathOnContact' : false
          }
        }
      ]
    }
};