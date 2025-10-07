export const postFormData = async (formEl, endpointUrl, customHeaders = {}) => {
    try {
        // Create FormData object from form element
        const formData = new FormData(formEl);

        // Make the POST request
        const response = await fetch(endpointUrl, {
            method: 'POST',
            headers: customHeaders,
            body: formData
        });

        // Parse JSON response
        const data = await response.json();

        // Return success status and data
        return {
            success: response.ok && data.status === 'success',
            data
        };

    } catch (error) {
        // Handle network or parsing errors
        return {
            success: false,
            data: { 
                message: 'Network or server error.', 
                error: error.message 
            }
        };
    }
};