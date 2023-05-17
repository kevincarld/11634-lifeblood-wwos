
import Layout from "components/util/Layout"
// chakra
import { Heading, Button } from "@chakra-ui/react"
//
import Container from "components/util/Container"

export default function Home() {
  return (
    <Layout>
      <Container bg='red'>
        <Heading as="h1">Hello World</Heading>
        <Button>Discover more</Button>
      </Container>
    </Layout>
  )
}
