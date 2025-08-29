        // DOM এলিমেন্টগুলো সিলেক্ট করা হয়েছে
        const servicesGrid = document.getElementById('services-grid');
        const callHistoryContainer = document.getElementById('call-history-container');
        const clearHistoryBtn = document.getElementById('clear-history-btn');
        const coinsCount = document.getElementById('coins-count');
        const heartsCount = document.getElementById('hearts-count');
        const copyCount = document.getElementById('copy-count');
        const alertModal = document.getElementById('alert-modal');
        const alertMessage = document.getElementById('alert-message');
        const alertOkBtn = document.getElementById('alert-ok-btn');



        document.querySelectorAll('.heart-icon').forEach(button => {
          button.addEventListener('click', (e) => {
            e.stopPropagation(); // click bubble হওয়া বন্ধ করো
          heartsCount.textContent = parseInt(heartsCount.textContent) + 1;
          });
        });



        // হার্ট, কল এবং কপি বাটনের জন্য ইভেন্ট ডেলিগেশন
        servicesGrid.addEventListener('click', (event) => {
            const target = event.target;

            // হার্ট বাটনে ক্লিক হলে
            // if (target.classList.contains('heart-icon')) {
            //     let currentHearts = parseInt(heartsCount.textContent);
            //     heartsCount.textContent = currentHearts + 1;
            // }
              const heartBtn = target.closest('.heart-icon');
              if (heartBtn) {
                  let currentHearts = parseInt(heartsCount.textContent);
                  heartsCount.textContent = currentHearts + 1;
              }

            // কল বাটনে ক্লিক হলে
            if (target.classList.contains('call-btn')) {
                let currentCoins = parseInt(coinsCount.textContent);
                if (currentCoins < 20) {
                    showModal("আপনার কাছে কল করার জন্য পর্যাপ্ত কয়েন নেই।");
                    alert('You do not have enough coins to make a call.');
                    return;
                }

                // কয়েন কমানো হলো
                coinsCount.textContent = currentCoins - 20;

                // অ্যালার্ট দেখানো হলো
                const serviceName = target.dataset.serviceName;
                const serviceNumber = target.dataset.serviceNumber;
                alert(`Calling ${serviceName} at ${serviceNumber}`);

                // বর্তমান সময় নেওয়া হলো
                const now = new Date();
                const timeString = now.toLocaleTimeString();

                // কল হিস্টরিতে যুক্ত করা হলো
                const historyItem = document.createElement('div');
                historyItem.className = 'bg-gray-50 p-4 rounded-lg flex items-center justify-between text-sm';
                historyItem.innerHTML = `
                    <div>
                        <p class="font-semibold text-gray-800">${serviceName}</p>
                        <p class="text-gray-500">${serviceNumber}</p>
                    </div>
                    <span class="text-gray-500">${timeString}</span>
                `;
                callHistoryContainer.prepend(historyItem); // শুরুতে যুক্ত করা হয়েছে
            }

            // কপি বাটনে ক্লিক হলে
            if (target.classList.contains('copy-btn')) {
                const hotlineNumber = target.dataset.hotlineNumber;

                // ক্লিপবোর্ডে কপি করা
                const tempInput = document.createElement('input');
                tempInput.value = hotlineNumber;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');

                alert(`"${hotlineNumber}" copied on clipboard!`);
                let currentCopies = parseInt(copyCount.textContent);
                copyCount.textContent = currentCopies + 1;

                document.body.removeChild(tempInput);
            }
        });

        // কল হিস্টরি পরিষ্কার করা
        clearHistoryBtn.addEventListener('click', () => {
            callHistoryContainer.innerHTML = '';
            alert('Call history cleared.');
        });








