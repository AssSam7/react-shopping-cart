const SHOP_DATA = {
    "products": [
      {
        "id": 1,
        "name": "Earphones",
        "price": 12690,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "Silver"
      },
      {
        "id": 2,
        "tagline": "200 Cash back",
        "name": "Test 6X",
        "price": 14000,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "32GB Gold \n\n Extended Warranty",
        "planLink": "http://pointstonothing.com/linktoplan",
        "gift": {
          "name": "Glory Selfie Stick",
          "desc": "Silver Moon",
          "price": 175
        }
      },
      {
        "id": 3,
        "name": "Test 6X",
        "price": 18000,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "64GB Gold \n\n Extended Warranty",
        "planLink": "http://pointstonothing.com/linktoplan",
        "gift": {
          "name": "Glory Selfie Stick",
          "desc": "Silver Moon",
          "price": 175
        }
      },
      {
        "id": 4,
        "tagline": "100 Cash back",
        "name": "Earphones",
        "price": 11690,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "White"
      },
      {
        "id": 5,
        "name": "Earphones",
        "price": 11690,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "Orange"
      },
      {
        "id": 6,
        "name": "Test 5X",
        "price": 10000,
        "imageUrl": "https://via.placeholder.com/150",
        "desc": "32GB Gold"
      }
    ],
    "pincode": {
      "560066": {
        "deliveryPrice": 50,
        "cashOnDelivery": false,
        "estimatedDays": {
          "min": 2,
          "max": 5
        }
      },
      "560067": {
        "deliveryPrice": 0,
        "cashOnDelivery": true,
        "estimatedDays": {
          "min": 3,
          "max": 5
        }
      },
      "560068": {
        "deliveryPrice": 0,
        "cashOnDelivery": false,
        "estimatedDays": {
          "min": 5,
          "max": 5
        }
      }
    },
    "discount": {
      "minTotal": 5000,
      "discountPercentage": 10
    }
  }

export default SHOP_DATA;