module.exports = testConfigServiceAccount = {
  type: process.env.test_type,
  project_id: process.env.test_project_id,
  private_key_id: process.env.test_private_key_id,
  private_key: process.env.test_private_key,
  client_email: process.env.test_client_email,
  client_id: process.env.test_client_id,
  auth_uri: process.env.test_auth_uri,
  token_uri: process.env.test_token_uri,
  auth_provider_x509_cert_url: process.env.test_auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.test_client_x509_cert_url
}
