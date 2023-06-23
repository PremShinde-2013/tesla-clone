import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section
        
        title="Model S"
        description="View Inventory"
        backgroundImg ="model-s.jpg"
        leftbtntxt=" Order now"
        rightbtntxt = "Demo Drive"

        />
        <Section
        
        title="Model Y"
        description="View Inventory"
        backgroundImg ="model-y.jpg"
        leftbtntxt=" Order now"
        rightbtntxt = "Demo Drive"

        />
        <Section
        
        title="Model 3"
        description="Leasing starting at $349/mo"
        backgroundImg ="model-3.jpg"
        leftbtntxt=" Order now"
        rightbtntxt = "Demo Drive"

        />
        <Section
        
        title="Model X"
        description="View Inventory"
        backgroundImg ="model-x.jpg"
        leftbtntxt=" Order now"
        rightbtntxt = "Demo Drive"

        />
        <Section
        
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg ="solar-panel.jpg"
        leftbtntxt=" Order now"
        rightbtntxt = "Learn More"

        />
        <Section
        
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg ="solar-roof.jpg"
        leftbtntxt=" Order now"
        rightbtntxt = "Learn More"

        />
        <Section
        
        title="Accessories"
      
        backgroundImg ="accessories.jpg"
        leftbtntxt=" Shop now"
      

        />
       
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    section{

      transition: transform ease-out 2s ;
    }
`

