import styled from "styled-components";

const GridContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  display: grid;
  height: 500px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;

const GridLayout = () => {
  return (
    <GridContainer>
      <div
        style={{
          backgroundColor: "pink",
          gridColumnStart: 1,
          gridColumnEnd: 5,
        }}
      ></div>
      <div style={{ backgroundColor: "blue" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et
        dolores alias iusto, dignissimos culpa! Velit nulla, id sequi
        consequuntur necessitatibus totam nihil sapiente quasi pariatur.
        Tempore, repellat ipsam! Accusantium molestiae, a quibusdam magni
        aspernatur provident recusandae? Debitis cum nulla quibusdam doloremque
        mollitia iste quidem suscipit! Ipsa, autem molestiae. Optio quaerat
        nostrum repudiandae autem modi, saepe dignissimos dolores at dicta
        voluptas ratione ipsa numquam, libero rerum sit a ea reiciendis quia
        cumque laborum illo officia in? Reprehenderit explicabo mollitia
        perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim debitis, mollitia officia sed quam id ab facere! Ducimus, optio?
        Alias atque illo sequi totam cum in laudantium voluptates non earum
        doloribus explicabo sunt, porro ullam ut, natus iste tempore expedita
        incidunt optio consectetur maxime minima quos quod odio. In soluta
        voluptatum repudiandae fugiat, quaerat corporis odio quae. Ex, est!
        Excepturi rerum aperiam obcaecati eius error reprehenderit aspernatur
        molestias distinctio eum nihil quo aliquid magni inventore possimus,
        fugiat doloremque dicta sequi. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nihil molestiae quam expedita iure sunt beatae
        corrupti, repellat maiores quae nemo quasi mollitia obcaecati eligendi
        necessitatibus ullam aliquam eius unde, reiciendis consequuntur harum.
        Magnam repellendus repellat explicabo maxime similique illo totam atque
        doloribus aliquam, animi minus! Maiores incidunt similique aut minima
        tempore dicta accusamus, impedit iste inventore excepturi ad
        perspiciatis exercitationem, eum temporibus deleniti iusto quia ea
        dolore voluptate dolorem sapiente. Magnam minus ipsam libero, voluptatem
        laborum ullam sed unde maiores?
      </div>
      <div style={{ backgroundColor: "Green" }}></div>
      <div style={{ backgroundColor: "purple" }}></div>
      <div style={{ backgroundColor: "Green" }}></div>
      <div style={{ backgroundColor: "Green" }}></div>
      <div style={{ backgroundColor: "Green" }}></div>
      <div style={{ backgroundColor: "Green" }}></div>
      <div style={{ backgroundColor: "purple" }}></div>
      <div style={{ backgroundColor: "red" }}></div>
      <div
        style={{
          backgroundColor: "red",
          gridColumnStart: 1,
          gridColumnEnd: 5,
        }}
      >
        <h2>Footer</h2>
      </div>
    </GridContainer>
  );
};

export default GridLayout;
