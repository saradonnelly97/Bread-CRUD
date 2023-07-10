const React = require('react')
const Default = require('./layouts/default')

function Show ({bread}) {
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
            and it 
            {
                bread.hasGluten ? <span>  does </span> : <span> does not </span>//ternary operator
            }
            have gluten
        </p>
        {
        bread.carbs > 30 ? <p>high carb bread</p> : <p>low carb bread</p> 
        }

        <img src={bread.image} alt={bread.name} />
      </Default>
    )
}

module.exports = Show