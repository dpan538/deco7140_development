// js/modules/postFormData.js
// Reusable module for submitting form data via fetch()

const postFormData = async (formEl, endpointUrl, customHeaders = {}) => {
    const formData = new FormData(formEl);

    try {
        const response = await fetch(endpointUrl, {
            method: "POST",
            headers: customHeaders,
            body: formData,
        });

        // The API returns either a success JSON (no 'status' field)
        // OR a validation-error JSON with field arrays.
        const data = await response.json().catch(() => ({}));

        // Treat any 2xx as success. (Template’s success example is 200/201 with fields only.)
        const success = response.ok;

        return { success: response.ok, data };
    } catch (error) {
        return {
            success: false,
            data: { message: "Network or server error.", error },
        };
    }
};

export { postFormData };
