using System.Data;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace App1
{

    public partial class MainWindow : Window
    {
        private string input = ""; // Tárolja a beírt szöveget

        public MainWindow()
        {
            InitializeComponent();
        }

        // Gombnyomás esemény
        private void Button_Click(object sender, RoutedEventArgs e)
        {
            var button = sender as System.Windows.Controls.Button;
            if (button != null)
            {
                input += button.Content.ToString();
                Display.Text = input;
            }
        }

        // Egyenlőség gomb esemény
        private void Equals_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                // Számítás az adatparsinggal
                var result = new DataTable().Compute(input, null);
                Display.Text = result.ToString();
                input = result.ToString(); // Az eredményt a következő művelet alapjául használjuk
            }
            catch
            {
                Display.Text = "Hiba";
                input = ""; // Ha hiba van, töröljük az inputot
            }
        }

        // Törlés gomb esemény
        private void Clear_Click(object sender, RoutedEventArgs e)
        {
            input = "";
            Display.Text = "";
        }
    }
}