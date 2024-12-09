$(document).ready(function () {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    mediaQuery.addListener(()=>{
        let change_btn=document.getElementById("change-image");
        let btn_pro=document.getElementById("btn-pro");
        let tab=document.getElementById("profile-tabs");
    if (mediaQuery.matches) {
        change_btn.classList.add("uil")
        change_btn.classList.add("uil-camera")
        change_btn.innerHTML="";
        btn_pro.innerHTML='<i class="fa-solid fa-crown fa-beat"></i>'
        btn_pro.style.backgroundColor="transparent"
        btn_pro.style.color="rgba(248, 112, 0, 0.63)";
        tab.classList.remove('list-group-verticle')
        tab.classList.add('list-group-horizontal')
    }
    else{
        change_btn.innerHTML="Change Image";
        tab.classList.add('list-group-verticle')
        tab.classList.remove('list-group-horizontal')
        change_btn.classList.remove("uil")
        change_btn.classList.remove("uil-camera")
        btn_pro.style.backgroundColor="rgba(248, 112, 0, 0.63)";
        btn_pro.innerHTML='Become Pro<i class="fa-solid fa-crown fa-beat"></i>'
        btn_pro.style.color="rgb(255, 255, 255)"
        btn_pro.style.backgroundColor="rgba(248, 112, 0, 0.63)";
    }
    })
    // Change user image
    $('#change-image').click(function () {
        $('#image-input').click();
        $('#image-input').change(function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                $('#user-image').attr('src', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
    });

    // Function to show a loading animation
    function showLoadingAnimation() {
        // Implement your loading animation here.
        // For this example, we'll simply show an alert.
        alert("Loading...");
    }

    // Function to show a success message box
    function showSuccessMessage() {
        // Display a message box or alert to inform the user that the information was updated successfully.
        alert("Information updated successfully!");
    }

    // Function to switch to a specific tab
    function switchTab(tabId) {
        $('.tab-pane').removeClass('active');
        $(`#${tabId}`).addClass('active');
    }

    // Function to enable edit mode for a specific tab
    function enableEditMode(tabId) {
        $(`#${tabId}-form input, #${tabId}-form select`).prop('readonly', false);
        $(`#edit-${tabId}`).hide();
        $(`#save-${tabId}`).removeClass("d-none");
    }

    // Function to save changes and display loading animation
    function saveChanges(tabId) {
        showLoadingAnimation();
        setTimeout(function () {
            showSuccessMessage();
            // After saving, revert to the "Edit" button
            $(`#save-${tabId}`).addClass("d-none");
            $(`#edit-${tabId}`).show();
        }, 1000); // Simulate a 5-second loading time (adjust as needed)
    }

    // Tab click events to switch tabs
    $('#profile-tabs a').click(function (e) {
        e.preventDefault();
        $('.list-group-item').removeClass('active')
        $(this).addClass('active')
        const tabId = $(this).attr('href').substring(1);
        switchTab(tabId);
    });

    // Enable edit for account settings
    $('#edit-account-settings').click(function () {
        enableEditMode('account-settings');
    });

    // Save changes for account settings
    $('#save-account-settings').click(function () {
        saveChanges('account-settings');
    });

    // Enable edit for personal details
    $('#edit-personal-details').click(function () {
        enableEditMode('personal-details');
    });

    // Save changes for personal details
    $('#save-personal-details').click(function () {
        saveChanges('personal-details');
    });

    // Enable edit for redeem plan
    $('#edit-redeem-plan').click(function () {
        enableEditMode('redeem-plan');
    });

    // Save changes for redeem plan
    $('#save-redeem-plan').click(function () {
        saveChanges('redeem-plan');
    });
});
