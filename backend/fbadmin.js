import { cert, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import {getStorage} from 'firebase-admin/storage'

const app = initializeApp({
  credential: cert({
    type: 'service_account',
    project_id: 'ethio-freelancer',
    private_key_id: 'b4a156a34af4d65db559e3c26f285386d4476a3c',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCkWb3s76muxcyr\n9oBLEyrXqqCKYQDtYjWWRM9U3Pri1nK/ehPKJUQCYhkaK/8qUIhCGEvN0bGzvhrB\nhRNTXwABI75dTV6DHTHOlbvNjDtqskOFQFBjRCwgWVgounOIAvv4ybe++5t2nm1Q\n7ypA1w/PewwVkDVZxkQUL0mg7Io5YnhkgndtuLiBsSE/16LMSlIceRRL6z6r10fY\nPvGh6PJcpbabK5b9gsYYNKVh+y9YGRbZyYBQGyJxu27bDdCffsLwZctLwOSqD5ud\n+u0wgwcLVK8Clb01WFM95fArNIlgOZPByWuQ/10JRfmdDDanzob7GNHkt6fBvMRk\ng97Jj5nRAgMBAAECggEABhqXJS+Ze7Y47cIP7bneg3gA0mLb5/UXzGbt1FcIslgI\nlvfvuDg+GGCQUhqENYwcI2hHmHNLSEOtNra8iwIiO+iZ71kqQ3BYIzYIbY/hvQq1\n20MSOT2U7fajgY+7Lrf9p7XGLz+k/HjR0omvZg0Wtzv4rOxYLudgK+e9sk5Wq97f\nISfTaScEoR5dq97eb1iG1IsD0b0oCrm+Hz2h4dsRA7oD4n7bhSBn7OBrA9N+9uoz\nzuU1x33RrG9aqG/t7OprXCUkY+i3LIuUDCMmLMlSqlMzIl9FXbqpWBy4jpbDPQm0\nAbOIJFjUKxAbVlcs0AB4QpMSjT7HLGfGjZ3y+xFa4QKBgQDPGYojqWsagQ9ZrJMI\n0UBnP37mqPUEIlauOhy6Q+6yOx2A3MWkjHSLabwiZc7Jl6R9CHOB3IyY1MWRWfZc\nVr1dMvXnUXaR93Q9m9zMnFvMFbzUHbTihrhVXh+LsqgV7yxICyok5HLdXs5C/eX+\ntNI0GdFkDezRTtAYP+kCcqe/XQKBgQDLKClHrHz4OsuOi22Wl6actahQDiOwIxU7\nEM1TZd8F/XQOkHaQNVKxm0rgWzMLrWakOE1May9V1ujrMv0fNmsfognQGAtQQE5Q\nyTJJ0JPUjec3EucxPhVBhsnl6SjC+eSWc5Fow5XpEHXHMUp9CBixo7c39IXMOj1Y\n6C5BaZeBBQKBgQCmprWbhtxR4qL4lT9obAI4U0cJ09H+dqdr4gV1+e5da+aM6Jr+\nk6vA99/VijlBzY4msyNHz7Mv1J/7G/p8SaxuD/EDKHGSeh8G6KJf4D6aVq+xvQnu\n81voDiqyXpyVsfXfL2TFdTPdYUn3bJqkQNuZ42C08+OqdpJLwTn+p0bHXQKBgQCE\nBVRWJIyNz7+KoacUzvZSLmbzp0yf4Ryh5rhX8wKs5NlvwYebDVvw2UceZ4XTl9r0\n6zWobJs1QFTay6bcisOwqd+QoJ9xhmiebTFF8MqwvYq9KoadZIfxrkM0KoH3uudG\nslGTcE7SR4USbkDG4eUSQ58EON5eKpbFWRT+Iz12dQKBgDPgsLQjvVSUlFL2NERs\nbYX1vTfd8d28p/TRD8Ha+lsMYeCoEmJXnLE8sj/i1l5IDaQqpBrlhPR8cTvBnzif\ndh1WDLeK6j84t5S5ASznK7EY+jyJakZr4nbjhKYdqKRFpUSUUrCO84Ca2ln0DifR\nMCIzJQ57URjyiiPdhHeztvDi\n-----END PRIVATE KEY-----\n',
    client_email:
      'firebase-adminsdk-jb7fd@ethio-freelancer.iam.gserviceaccount.com',
    client_id: '114954435123678270992',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jb7fd%40ethio-freelancer.iam.gserviceaccount.com',
  }),
  storageBucket: "ethio-freelancer.appspot.com",
})

const adminAuth = getAuth(app)
const adminStorage = getStorage(app)
export {  adminAuth ,adminStorage}
