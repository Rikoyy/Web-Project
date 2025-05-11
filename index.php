<?php include_once "layout/header.php"; ?>
<link rel="stylesheet" href="/style/styles.css">

<?php include_once "layout/navbar.php"; ?>

<div class="container mt-5 col-md-8 mb-5">

    <h3 class="text-center mb-4" style="color: #264653;">
        <i class="fas fa-chart-line me-2"></i>EcoGreen Polinela
    </h3>

    <div class="row g-4 mb-5">

        <!-- // Card for Temperature Sensor -->
        <div class="col-md-6">
            <div class="card sensor-card shadow-sm border-0">
                <div class="card-body py-4">
                    <div class="d-flex align-items-center justify-content-between">

                        <div class="d-flex align-items-center flex-grow-1">
                            <div class="sensor-icon temperature me-4">
                                <i class="fas fa-thermometer-half"></i>
                            </div>
                            <div>
                                <p class="card-title">Pie Temperatur (BMP280)</p>
                                <div class="sensor-value">
                                    <p><strong id="temperature" class=""></strong><strong class="unit"> °C</strong></p>
                                </div>
                            </div>
                        </div>

                        <div class="chart-container2 text-center">
                            <canvas id="pieTemperature"></canvas>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- Line Chart for Temperature -->
        <div class="col-md-6">
            <div class="card sensor-card shadow-sm border-0">
                <div class="card-body py-4">
                  <!--  <p class="card-title text-center">Line Chart Temperatur</p> -->
                    <canvas id="temperatureChart"></canvas>
                </div>
            </div>
        </div>

        <!-- Card for Pressure Sensor -->
        <div class="col-md-6">
            <div class="card sensor-card shadow-sm border-0">
                <div class="card-body py-4">
                    <div class="d-flex align-items-center justify-content-between">

                        <div class="d-flex align-items-center flex-grow-1">
                            <div class="sensor-icon pressure me-4">
                                <i class="fas fa-tachometer-alt"></i>
                            </div>
                            <div>
                                <p class="card-title">Pie Tekanan (Pressure)</p>
                                <div class="sensor-value">
                                    <p><strong id="pressure" class=""></strong><strong class="unit"> hPa</strong></p>
                                </div>
                            </div>
                        </div>

                        <div class="chart-container2 text-center">
                            <canvas id="piePressure"></canvas>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- Line Chart for Pressure -->
        <div class="col-md-6">
            <div class="card sensor-card shadow-sm border-0">
                <div class="card-body py-4">
                 <!--   <p class="card-title text-center">Line Chart Tekanan</p> -->
                    <canvas id="pressureChart"></canvas>
                </div>
            </div>
        </div>

        <!-- Card for Altitude -->
        <div class="col-md-6">
            <div class="card sensor-card shadow-sm border-0">
                <div class="card-body py-4">
                    <div class="d-flex align-items-center justify-content-between">

                        <div class="d-flex align-items-center flex-grow-1">
                            <div class="sensor-icon latitude me-4">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <p class="card-title">Pie Altitude (Ketinggian)</p>
                                <div class="sensor-value">
                                    <p><strong id="altitude" class=""></strong><strong class="unit"> m</strong></p>
                                </div>
                            </div>
                        </div>

                        <div class="chart-container2 text-center">
                            <canvas id="pieAltitude"></canvas>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- Line Chart for Altitude -->
        <div class="col-md-6">
            <div class="card sensor-card shadow-sm border-0">
                <div class="card-body py-4">
                <!--     <p class="card-title text-center">Line Chart Ketinggian</p> -->
                    <canvas id="altitudeChart"></canvas>
                </div>
            </div>
        </div>

        <!-- // Card for Humidity Sensor -->
        <div class="col-md-6">
            <div class="card sensor-card shadow-sm border-0">
                <div class="card-body py-4">
                    <div class="d-flex align-items-center justify-content-between">

                        <div class="d-flex align-items-center flex-grow-1">
                            <div class="sensor-icon humidity me-4">
                                <i class="fas fa-tint"></i>
                            </div>
                            <div>
                                <p class="card-title">Kelembaban</p>
                                <div class="sensor-value">
                                    <p><strong id="humi" class=""></strong><strong class="unit"> %</strong></p>
                                </div>
                            </div>
                        </div>

                        <div class="chart-container2 text-center">
                            <canvas id="pieHumi"></canvas>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- card untuk line chart Humidity -->
        <div class="col-md-6">
            <div class="card sensor-card shadow-sm border-0">
                <div class="card-body py-4">
                    <canvas id="humiChart"></canvas>
                </div>
            </div>
        </div>

        <!-- // Card for Temperature Sensor -->
        <div class="col-md-6">
            <div class="card sensor-card shadow-sm border-0">
                <div class="card-body py-4">
                    <div class="d-flex align-items-center justify-content-between">

                        <div class="d-flex align-items-center flex-grow-1">
                            <div class="sensor-icon temperature me-4">
                                <i class="fas fa-thermometer-half"></i>
                            </div>
                            <div>
                                <p class="card-title">Suhu</p>
                                <div class="sensor-value">
                                    <p><strong id="suhu" class=""></strong><strong class="unit"> °C</strong></p>
                                </div>
                            </div>
                        </div>

                        <div class="chart-container2 text-center">
                            <canvas id="pieSuhu"></canvas>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- card untuk line chart suhu -->
        <div class="col-md-6">
            <div class="card sensor-card shadow-sm border-0">
                <div class="card-body py-4">
                    <canvas id="suhuChart"></canvas>
                </div>
            </div>
        </div>

        <!-- // Card for Timestamp -->
        <div class="col">
            <p class="timestamp">Last update: <span id="timestamp"></span></p>
        </div>

    </div>

    <!-- //============================================================================== -->




</div>

<?php include_once "layout/footer.php"; ?>
<script src="source/js/scripts.js"></script>
