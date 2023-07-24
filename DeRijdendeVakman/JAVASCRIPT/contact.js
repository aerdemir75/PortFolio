function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Fetch the form data
    const formData = new FormData(event.target);

    // Extract form values
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const licensePlate = formData.get("licensePlate");
    const problemDescription = formData.get("problemDescription");

    // Here, you can perform further actions like sending the data to a server or displaying it.
    // For this example, we will just log the data to the console.
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("License Plate:", licensePlate);
    console.log("Problem Description:", problemDescription);

    // Optionally, you can reset the form after submission
    event.target.reset();
  }

  // Add event listener to the form on submission
  const form = document.getElementById("formulier");
  form.addEventListener("submit", handleSubmit);