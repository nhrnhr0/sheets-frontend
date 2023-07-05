
let need_to_print_on_products_select_input = undefined;
let need_to_order_products_select_input = undefined;
let need_to_cut_checkbox_input = undefined;
let products_from_the_client_input = undefined;
let products_order = undefined;
// files upload functionallity
let uploaded_files_element = undefined;
let order_delivery_radio_1 = undefined;
let order_delivery_radio_2 = undefined;
let order_delivery_address_input = undefined;
let is_graphic_final_radio_input_1 = undefined;
let is_graphic_final_radio_input_2 = undefined;
let client_graphics_text_textarea = undefined;

// on document ready we bind the files input to the upload function
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
    uploaded_files_element = document.getElementById('uploaded-files');
    init_fields_visibility();
    add_events_listeners_to_forms();
});


function handleFileSelect(evt) {
    // for every file (uploaded before / new uploaded) we will create a new div:
    // we will add a new input field with the file name readonly and a delete button
    // and text input field for the client's wanted file width
    // and number input field for the client's wanted file copies
    
    // get the files
    let files = evt.target.files;
    // loop over the files
    for (let i = 0, f; f = files[i]; i++) {
        // create a new div
        let new_file_div = document.createElement('div');
        // new_file_div.className = 'col-md-6 mb-3';
        // create a new input field for the file name
        let new_file_name_input = document.createElement('input');
        // set the input field type to text
        new_file_name_input.type = 'text';
        // set the input field class to form-control
        new_file_name_input.className = 'form-control';
        // set the input field value to the file name
        new_file_name_input.value = f.name;
        // set the input field to readonly
        new_file_name_input.disabled = true;
        // create a new input field for the file width
        let new_file_width_input = document.createElement('input');
        // set the input field type to text
        new_file_width_input.type = 'text';
        // set the input field class to form-control
        new_file_width_input.className = 'form-control';
        // set the input field placeholder to the file width
        new_file_width_input.placeholder = 'אורך הקובץ, להשאיר ריק = גודל מקורי';
        // create a new input field for the file copies
        let new_file_copies_input = document.createElement('input');
        // set the input field type to number
        new_file_copies_input.type = 'text';
        // set the input field class to form-control
        new_file_copies_input.className = 'form-control';
        // set the input field placeholder to the file copies
        new_file_copies_input.placeholder = 'מספר עותקים';
        // create a new delete button
        let new_file_delete_button = document.createElement('button');
        // set the button text to 'delete'
        new_file_delete_button.innerText = 'delete';
        new_file_delete_button.className = 'btn btn-danger';
        // set the button onclick function to delete the file
        new_file_delete_button.onclick = function() {
            // remove the file div
            new_file_div.remove();
        }
        // append the file name input to the file div
        new_file_div.appendChild(new_file_name_input);
        // append the file width input to the file div
        new_file_div.appendChild(new_file_width_input);
        // append the file copies input to the file div
        new_file_div.appendChild(new_file_copies_input);
        // append the file delete button to the file div
        new_file_div.appendChild(new_file_delete_button);
        // append the file div to the uploaded files div
        uploaded_files_element.appendChild(new_file_div);
    }
}

















function init_fields_visibility() {
    need_to_print_on_products_select_input = document.getElementById('need_to_print_on_products_select_input');
    need_to_order_products_select_input = document.getElementById('need_to_order_products_select_input');
    need_to_cut_checkbox_input = document.getElementById('need_to_cut_checkbox_input');
    products_from_the_client_input = document.getElementById('products_from_the_client_input');
    products_order = document.getElementById('products_order');
    order_delivery_radio_1 = document.getElementById('order_delivery_radio_1');
    order_delivery_radio_2 = document.getElementById('order_delivery_radio_2');
    order_delivery_address_input = document.getElementById('order_delivery_address_input');
    is_graphic_final_radio_input_1 = document.getElementById('is_graphic_final_radio_input_1');
    is_graphic_final_radio_input_2 = document.getElementById('is_graphic_final_radio_input_2');
    client_graphics_text_textarea = document.getElementById('client_graphics_text_textarea');

    // hide the need_to_order_products_select_input and need_to_cut_checkbox_input
    // to show and hide the parent with class = "col-md-7 mb-3" can be few levels up
    $(need_to_order_products_select_input).closest('.form-part').hide();
    $(need_to_cut_checkbox_input).closest('.form-part').hide();
    $(products_from_the_client_input).closest('.form-part').hide();
    $(products_order).closest('.form-part').hide();
    $(order_delivery_address_input).closest('.form-part').hide();
    $(client_graphics_text_textarea).closest('.form-part').hide();
}


function order_delivery_logic(event) {
    // if checked and value = delivery
    // show order_delivery_address_input
    // if checked and value = pickup or else
    // hide order_delivery_address_input
    debugger;
    if (event.target.checked && event.target.value == 'delivery') {
        $(order_delivery_address_input).closest('.form-part').show();
    } else {
        $(order_delivery_address_input).closest('.form-part').hide();
    }
}
//// logic of hidden and revileaning forms
function add_events_listeners_to_forms() {
    // add event listener to the form select
    need_to_print_on_products_select_input.addEventListener('change', need_to_print_logic);
    need_to_order_products_select_input.addEventListener('change', need_to_order_logic);

    // add event listener to the form radio
    order_delivery_radio_1.addEventListener('change', order_delivery_logic);
    order_delivery_radio_2.addEventListener('change', order_delivery_logic)

    is_graphic_final_radio_input_1.addEventListener('change', is_graphic_final_logic);
    is_graphic_final_radio_input_2.addEventListener('change', is_graphic_final_logic);
}

function is_graphic_final_logic(event) {
    // if checked and value = no
    // show client_graphics_text_textarea   
    // if checked and value = yes or else
    // hide client_graphics_text_textarea
    debugger;
    if (event.target.checked && event.target.value == 'no') {
        $(client_graphics_text_textarea).closest('.form-part').show();
    } else {
        $(client_graphics_text_textarea).closest('.form-part').hide();
    }
}

function need_to_order_logic(event) {
    // if value = כן
    // show products_from_the_client_input, hide products_order
    // if value = לא
    // show products_order, hide products_from_the_client_input
    // to show and hide the parent with class = "col-md-7 mb-3" can be few levels up
    if (event.target.value === 'כן') {
        $(products_from_the_client_input).closest('.form-part').hide();
        $(products_order).closest('.form-part').show();
    }
    else if (event.target.value === 'לא') {
        $(products_order).closest('.form-part').hide();
        $(products_from_the_client_input).closest('.form-part').show();
    }else{
        $(products_order).closest('.form-part').hide();
        $(products_from_the_client_input).closest('.form-part').hide();
    }
}
function need_to_print_logic(event) {
    // if value = כן
    // show need_to_order_products_select_input, hide need_to_cut_checkbox_input
    // if value = לא
    // show need_to_cut_checkbox_input, hide need_to_order_products_select_input
    // to show and hide the parent with class = "col-md-7 mb-3" can be few levels up
    debugger;
    if (event.target.value === 'כן, אני רוצה שתדפיסו לי על סחורה') {
        $(need_to_order_products_select_input).closest('.form-part').show();
        $(need_to_cut_checkbox_input).closest('.form-part').hide();
    } else if (event.target.value === 'לא, אני צריך רק חומרים') {
        $(need_to_order_products_select_input).closest('.form-part').hide();
        $(need_to_cut_checkbox_input).closest('.form-part').show();
    }
    else {
        $(need_to_order_products_select_input).closest('.form-part').hide();
        $(need_to_cut_checkbox_input).closest('.form-part').hide();
    }
}