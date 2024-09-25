import { Container, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Container
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Container sx={{ flex: 1, mr: 2 }}>
          <Typography variant="h6">About Page</Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            quas, similique quos ducimus quaerat aperiam quibusdam recusandae
            voluptas consequuntur quam qui nam reiciendis porro? Assumenda
            facere esse incidunt sit illum vel qui totam praesentium corrupti.
            Ducimus asperiores maxime laudantium corporis nisi eligendi magni id
            sequi! Aliquam cupiditate, quas maxime deleniti sunt accusamus amet
            aut molestias, beatae nulla sequi eaque reiciendis id, iste nobis.
            Aliquid, blanditiis repellat molestias modi necessitatibus cum non
            dolor enim ullam minima recusandae deserunt! Quia odit, tempora
            dolore fuga assumenda atque iusto. Neque cum mollitia officiis
            officia sit asperiores obcaecati voluptatem reprehenderit, eos
            consequatur, sint vel nulla? Neque consequatur error unde enim
            consequuntur dolorum ea quasi sint ad vel dicta corporis atque
            provident beatae sunt cupiditate numquam nisi voluptatum aspernatur
            adipisci, et ullam recusandae? Quas pariatur modi ratione
            laudantium. Iusto, tenetur. Quae harum eius distinctio? Molestiae
            voluptatibus iste, minima cum fugiat numquam id recusandae nostrum
            eaque illo saepe quasi tempore facere iusto at. Necessitatibus nam a
            commodi voluptatum odio aliquam vero dolores ipsum saepe, eum est
            sit reprehenderit cumque id distinctio optio? Corporis tempora
            eveniet ex expedita dolorum dolor dignissimos, magni rerum eligendi
            ea laborum maxime vel reprehenderit voluptas assumenda odio! Sunt
            doloremque at accusantium aspernatur eaque!
          </Typography>
        </Container>
        <Container sx={{ flex: 1 }}>
          <img
            src="/images/card.png"
            alt="Card"
            style={{ width: "100%", maxWidth: 400 }}
          />
        </Container>
      </Container>
    </Container>
  );
}
