
import { Box, Center, Heading } from "@chakra-ui/react"
import { useLRAuth } from "loginradius-react"

export default function Profile() {
  const { user, isLoading, isAuthenticated } = useLRAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isAuthenticated) {
    return (
      <Box>
        <Center mt={10}>
          <Heading a="h2">
            Welcome to your profile {user.Email[0].Value}
          </Heading>
        </Center>
      </Box>
    )
  }
}