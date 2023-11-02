/* global */

/**
 * Returns churn rate of client
 * @customfunction
 * @param {string} client_id Nickname of github user
 * @returns Churn of client
 */

export async function churn(client_id) {
  const url = `https://protected-badlands-28432-72b308c2a4a7.herokuapp.com/api/v1/clients/${client_id}`;
  const response = await fetch(url);
  const json = await response.json();

  return json["churn"];
}
