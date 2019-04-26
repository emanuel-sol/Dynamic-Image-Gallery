$(document).ready(function() {

    function displayPhotos(data) {
        var photoHTML = "";
        $.each(data,function(i,photo) {
            photoHTML += '<div class="image-container ' + photo.tag + ' show"><img src="' + photo.thumbnail + '" class="image">' +
                '<p>' + formatJSONDate(photo.date) + '</p><p class="title">' + photo.title + '</p>' +
                '<p>' + photo.description + '</p></div>';
        }); // end each

        $('#gallery').html(photoHTML);
    };

    $.getJSON("data.json", displayPhotos);
}); // end ready

function formatJSONDate(jsonDate) {
    var parsedDate = jsonDate.toString().split('-');
    var getYear = parsedDate[0];
    var getMonth = parsedDate[1];
    var getDay = parsedDate[2].substring(0,2);

    var standardDate = getMonth + '/' + getDay + '/' + getYear;
    return standardDate;
}

function filterGallery(tag) {
    var communityBuilding, education, publicEngagement, research, hasShow, classes;
    hasShow = false;
    communityBuilding = document.getElementsByClassName("communityBuilding");
    education = document.getElementsByClassName("education");
    publicEngagement = document.getElementsByClassName("publicEngagement");
    research = document.getElementsByClassName("research");
    if (tag === "research") {
        for (i = 0; i < communityBuilding.length; i++) {
            classes = communityBuilding[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            communityBuilding[i].className = classes.join(" ");
        }

        for (i = 0; i < education.length; i++) {
            classes = education[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            education[i].className = classes.join(" ");
        }

        for (i = 0; i < research.length; i++) {
            classes = research[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    hasShow = true;
                }
            }

            if (!hasShow) {
                research[i].className += " show";
            }
        }

        for (i = 0; i < publicEngagement.length; i++) {
            classes = publicEngagement[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            publicEngagement[i].className = classes.join(" ");
        }
    } else if (tag === "communityBuilding") {
        for (i = 0; i < research.length; i++) {
            classes = research[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            research[i].className = classes.join(" ");
        }

        for (i = 0; i < education.length; i++) {
            classes = education[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            education[i].className = classes.join(" ");
        }

        for (i = 0; i < communityBuilding.length; i++) {
            classes = communityBuilding[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    hasShow = true;
                }
            }

            if (!hasShow) {
                communityBuilding[i].className += " show";
            }
        }

        for (i = 0; i < publicEngagement.length; i++) {
            classes = publicEngagement[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            publicEngagement[i].className = classes.join(" ");
        }
    } else if (tag === "education") {
        for (i = 0; i < research.length; i++) {
            classes = research[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            research[i].className = classes.join(" ");
        }

        for (i = 0; i < communityBuilding.length; i++) {
            classes = communityBuilding[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            communityBuilding[i].className = classes.join(" ");
        }

        for (i = 0; i < education.length; i++) {
            classes = education[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    hasShow = true;
                }
            }

            if (!hasShow) {
                education[i].className += " show";
            }
        }

        for (i = 0; i < publicEngagement.length; i++) {
            classes = publicEngagement[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            publicEngagement[i].className = classes.join(" ");
        }
    } else if (tag === "publicEngagement") {
        for (i = 0; i < research.length; i++) {
            classes = research[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            research[i].className = classes.join(" ");
        }

        for (i = 0; i < communityBuilding.length; i++) {
            classes = communityBuilding[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            communityBuilding[i].className = classes.join(" ");
        }

        for (i = 0; i < publicEngagement.length; i++) {
            classes = publicEngagement[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    hasShow = true;
                }
            }

            if (!hasShow) {
                publicEngagement[i].className += " show";
            }
        }

        for (i = 0; i < education.length; i++) {
            classes = education[i].className.split(" ");
            for (j = 0; j < classes.length; j++) {
                if (classes[j] === "show") {
                    classes.splice(j, 1);
                }
            }
            education[i].className = classes.join(" ");
        }
    }
}
