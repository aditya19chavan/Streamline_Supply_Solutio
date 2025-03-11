export const fetchTickets = async () => {
    const response = await fetch("http://localhost:8080/api/tickets");
    return response.json();
  };
  
  export const createTicket = async (ticket) => {
    const response = await fetch("http://localhost:8080/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket),
    });
    return response.json();
  };
  